import { Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CampaignService from "../../api/services/CampaignService";
import ActionButton from "../Table/ActionButton";
import EnhancedTable from "../Table/EnhancedTable";
import SearchBar from "./SearchBar";
import ToggleButtonSmall from "./ToggleButtonSmall";

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
    id: "clientId",
    numeric: false,
    disablePadding: false,
    label: "Client ID",
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
  clientId,
  createdTime,
  platform,
  campaignCost,
  state
) {
  return {
    no,
    campaignId,
    clientId,
    createdTime,
    platform,
    campaignCost,
    state,
  };
}

function AdCampaignsTable() {
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);

  const [numOfRows, setNumOfRows] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { userId } = useSelector((state) => state.login);

  const [searchStr, setSearchStr] = useState("");

  // for toggle button
  const [alignment, setAlignment] = React.useState("Campaign");

  const requestBody = {
    page: page,
    pageCount: rowsPerPage,
  };

  useEffect(() => {
    // const response = CampaignService.getAllCampaigns();
    const response = CampaignService.getAllCampaignsByPost({
      ...requestBody,
      page: page,
      pageCount: rowsPerPage,
    });
    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {
          //   console.log(res.data);
          let response = res.data.campaigns;
          let filteredResponse;

          if (alignment === "Client") {
            filteredResponse = response.filter((item) =>
              item.clientId.includes(searchStr)
            );
          } else {
            filteredResponse = response.filter(
              (item) => item._id.includes(searchStr)
            );
          }

          setRows(
            filteredResponse.map((item, index) => {
              return createData(
                index + 1 + rowsPerPage * page,
                item._id ? item._id : "",
                item.clientId ? item.clientId : "",
                item.createdTime ? item.createdTime : "",
                item.platform ? item.platform : "",
                item.campaignCost ? item.campaignCost : 0,
                item.state ? item.state : ""
              );
            })
          );
          setNumOfRows(res.data.total);
        }
      }
    });
    // let res = response.data;
  }, [userId, searchStr, alignment, page, rowsPerPage]);

  const viewClickHandler = (campaignId) => {
    navigate(`/client-view/campaign-view?campaignId=${campaignId}`);
  };

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
        tableTitle={"Campaigns Report"}
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
                placeholder={"Search by " + alignment + " ID"}
              />
            </Box>
            <ToggleButtonSmall
              alignment={alignment}
              setAlignment={setAlignment}
            />
          </Box>
        }
      />
    </Box>
  );
}

export default AdCampaignsTable;
