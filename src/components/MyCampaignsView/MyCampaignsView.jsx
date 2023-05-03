import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CampaignService from "../../api/services/CampaignService";
import ActionButton from "../Table/ActionButton";
import EnhancedTable from "../Table/EnhancedTable";

const HEAD_CELLS = [
  {
    id: "id",
    numeric: true,
    disablePadding: true,
    label: "No",
  },
  {
    id: "campaignId",
    numeric: false,
    disablePadding: false,
    label: "Campaign ID",
  },
  {
    id: "createdTime",
    numeric: false,
    disablePadding: false,
    label: "Date/Time",
  },
  {
    id: "platform",
    numeric: false,
    disablePadding: false,
    label: "Platform",
  },
  {
    id: "viewsFromEach",
    numeric: true,
    disablePadding: false,
    label: "Views From Each",
  },
  {
    id: "numberOfPromoterSelections",
    numeric: true,
    disablePadding: false,
    label: "Promoter Selections",
  },
  {
    id: "campaignCost",
    numeric: true,
    disablePadding: false,
    label: "Cost",
  },
  {
    id: "state",
    numeric: false,
    disablePadding: false,
    label: "State",
  },
  {
    id: "Actions",
    numeric: true,
    disablePadding: false,
    label: "Actions",
    align: "center",
    sorting: false,
  },
];

function createData(
  no,
  campaignId,
  createdTime,
  platform,
  viewsFromEach,
  promoterSelectionCount,
  campaignCost,
  state
) {
  return {
    no,
    campaignId,
    createdTime,
    platform,
    viewsFromEach,
    promoterSelectionCount,
    campaignCost,
    state,
  };
}

function MyCampaignsView() {
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);

  const [numOfRows, setNumOfRows] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { userId } = useSelector((state) => state.login);

  const ongoingCampaignsRequest = {
    clientId: userId,
    page: 0,
    pageCount: 10,
  };

  useEffect(() => {
    const response = CampaignService.campaignsByClient({
      ...ongoingCampaignsRequest,
      page: page,
      pageCount: rowsPerPage,
    });
    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {
          let resp = res.data.campaigns;

          setRows(
            resp.map((item, index) => {
              return createData(
                index + 1 + rowsPerPage * page,
                item._id ? item._id : "",
                item.createdTime ? item.createdTime : "",
                item.platform ? item.platform : "",
                item.viewsFromEach ? item.viewsFromEach : 0,
                item.selectedPromoterIdList
                  ? item.selectedPromoterIdList.length
                  : 0,
                item.campaignCost ? item.campaignCost : 0,
                item.state ? item.state : ""
              );
            })
          );
          setNumOfRows(res.data.total);
        }
      }
    });
  }, [userId, page, rowsPerPage]);

  const viewClickHandler = (campaignId) => {
    navigate(`/client-view/campaign-view?campaignId=${campaignId}`);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        mt: 2,
        p: 3,
        width: "100%",
        alignItems: "center",
      }}
    >
      <EnhancedTable
        headCells={HEAD_CELLS}
        rows={rows}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        numOfRows={numOfRows}
        hideMoreOptions
        tableTitle={"My Campaigns"}
        // align={'center'}
        actions={(index) => {
          return (
            <>
              <ActionButton
                text="View"
                actionClickHandler={() => viewClickHandler(index)}
              />
            </>
          );
        }}
        isToolbarVisible={true}
      />
    </Paper>
  );
}

export default MyCampaignsView;
