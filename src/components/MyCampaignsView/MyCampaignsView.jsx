import { Paper, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
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

function createData(no, campaignId, createdTime, platform, viewsFromEach, promoterSelectionCount, campaignCost, state) {
  return { no, campaignId, createdTime, platform, viewsFromEach, promoterSelectionCount, campaignCost, state };
}

function MyCampaignsView() {
  const [rows, setRows] = useState([]);

  const [numOfRows, setNumOfRows] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const { userId } = useSelector((state) => state.login);

  useEffect(() => {
    const response = CampaignService.getCampaignsByClient(userId);
    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {
          console.log(res.data);
          res = res.data.campaigns;

          setRows(
            res.map((item, index) => {
              return createData(
                index + 1 + rowsPerPage * page,
                item._id ? item._id : "",
                item.createdTime ? item.createdTime : "",
                item.platform ? item.platform : "",
                item.viewsFromEach ? item.viewsFromEach : 0,
                item.selectedPromoterIdList ? item.selectedPromoterIdList.length : 0,
                item.campaignCost ? item.campaignCost : 0,
                item.state ? item.state : ""
              );
            })
          );
        }
      }
    });
    // let res = response.data;
  }, [userId]);

  const viewClickHandler = (jobId) => {
    // navigate(`edit?listname=${listName}`);
    // setJobId(jobId);
    // handleOpen();
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
                // icon={<BorderColor />}
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
