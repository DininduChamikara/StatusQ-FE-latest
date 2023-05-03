import { Box } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PromoterCampaignService from "../../api/services/PromoterCampaignService";
import ActionButton from "../Table/ActionButton";
import EnhancedTable from "../Table/EnhancedTable";
import SearchBar from "./SearchBar";

const HEAD_CELLS = [
  {
    id: "id",
    numeric: true,
    disablePadding: true,
    label: "No",
  },
  {
    id: "jobId",
    numeric: false,
    disablePadding: false,
    label: "Job ID",
  },
  {
    id: "promoterId",
    numeric: false,
    disablePadding: false,
    label: "Promoter ID",
  },
  {
    id: "campaignId",
    numeric: false,
    disablePadding: false,
    label: "Campaign ID",
  },
  {
    id: "state",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "paymentApproval",
    numeric: false,
    disablePadding: false,
    label: "Payment Approval",
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
  jobId,
  promoterId,
  campaignId,
  state,
  paymentApproved
) {
  let payApproved = "Not Approved";
  if (paymentApproved) {
    payApproved = "Approved";
  } else {
    payApproved = "Not Approved";
  }
  return {
    no,
    jobId,
    promoterId,
    campaignId,
    state,
    payApproved,
  };
}

function PromoterCampaignsDetailsTable() {
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);

  const [numOfRows, setNumOfRows] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [searchStr, setSearchStr] = useState("");

  const viewClickHandler = (jobId) => {
    navigate(`./promoter_campaign_view?jobId=${jobId}`);
  };

  const requestBody = {
    page: page,
    pageCount: rowsPerPage,
  }

  useEffect(() => {
    const response = PromoterCampaignService.getPromoterCampaignsByPost({
      ...requestBody,
      page: page,
      pageCount: rowsPerPage
    });

    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {
          //   console.log(res.data);
          let response = res.data.promoterCampaigns;

          response = response.filter((item) => item._id.includes(searchStr) || item.promoterId.includes(searchStr) || item.campaignId.includes(searchStr));
          
          setRows(
            response.map((item, index) => {
              return createData(
                index + 1 + rowsPerPage * page,
                item._id ? item._id : "",
                // item.clientId ? item.clientId : "",
                item.promoterId ? item.promoterId : "",
                item.campaignId ? item.campaignId : "",
                item.state ? item.state : "",
                item.paymentApproved ? item.paymentApproved : ""
              );
            })
          );
          setNumOfRows(res.data.total);
        }
      }
    });
    // let res = response.data;
  }, [searchStr, page, rowsPerPage]);

  return (
    <Box>
      <EnhancedTable
        headCells={HEAD_CELLS}
        rows={rows}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        numOfRows={numOfRows}
        hideMoreOptions
        tableTitle={"Promoter Campaigns Details Report"}
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
        searchEnable={
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Box width={300}>
              <SearchBar
                setSearchStr={setSearchStr}
                placeholder={"Search by Promoter ID"}
              />
            </Box>
          </Box>
        }
      />
    </Box>
  );
}

export default PromoterCampaignsDetailsTable;
