import { BorderColor, RemoveCircle } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PromoterCampaignService from "../../api/services/PromoterCampaignService";
import EnhancedTable from "../../components/Table/EnhancedTable";
import ActionButton from "../Table/ActionButton";

function createData(no, datetime, campaignId, clientID, numOfAds, budget) {
  return { no, datetime, campaignId, clientID, numOfAds, budget };
}

const HEAD_CELLS = [
  {
    id: "id",
    numeric: true,
    disablePadding: true,
    label: "No",
  },
  {
    id: "datetime",
    numeric: false,
    disablePadding: false,
    label: "Date/Time",
  },
  {
    id: "campaignId",
    numeric: false,
    disablePadding: false,
    label: "Campaign ID",
  },
  {
    id: "clientID",
    numeric: false,
    disablePadding: false,
    label: "Client ID",
  },
  {
    id: "numOfAds",
    numeric: true,
    disablePadding: false,
    label: "Ads Count",
  },
  {
    id: "budget",
    numeric: false,
    disablePadding: false,
    label: "Budget",
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

// const rows = [
//   createData(
//     1,
//     "20/12/2022 04:55:00",
//     "dsfsdhsd6545dsfssds",
//     "dfsdfsdfsdf1454665",
//     2,
//     "Rs. 100"
//   ),
//   createData(
//     2,
//     "20/12/2022 04:55:00",
//     "dsfsdhsd6545dsfssds",
//     "dfsdfsdfsdf1454665",
//     2,
//     "Rs. 100"
//   ),
//   createData(
//     3,
//     "20/12/2022 04:55:00",
//     "dsfsdhsd6545dsfssds",
//     "dfsdfsdfsdf1454665",
//     2,
//     "Rs. 100"
//   ),
//   createData(
//     4,
//     "20/12/2022 04:55:00",
//     "dsfsdhsd6545dsfssds",
//     "dfsdfsdfsdf1454665",
//     2,
//     "Rs. 100"
//   ),
//   createData(
//     5,
//     "20/12/2022 04:55:00",
//     "dsfsdhsd6545dsfssds",
//     "dfsdfsdfsdf1454665",
//     2,
//     "Rs. 100"
//   ),
//   createData(
//     6,
//     "20/12/2022 04:55:00",
//     "dsfsdhsd6545dsfssds",
//     "dfsdfsdfsdf1454665",
//     2,
//     "Rs. 100"
//   ),
//   createData(
//     7,
//     "20/12/2022 04:55:00",
//     "dsfsdhsd6545dsfssds",
//     "dfsdfsdfsdf1454665",
//     2,
//     "Rs. 100"
//   ),
//   createData(
//     8,
//     "20/12/2022 04:55:00",
//     "dsfsdhsd6545dsfssds",
//     "dfsdfsdfsdf1454665",
//     2,
//     "Rs. 100"
//   ),
//   createData(
//     9,
//     "20/12/2022 04:55:00",
//     "dsfsdhsd6545dsfssds",
//     "dfsdfsdfsdf1454665",
//     2,
//     "Rs. 100"
//   ),
// ].sort((a, b) => (a.no < b.no ? -1 : 1));

function JobsView() {

  const [rows, setRows] = useState([]);

  const { promoterId } = useSelector((state) => state.login);

  useEffect(() => {
    const response = PromoterCampaignService.getPromoterCampaigns(promoterId);
    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {
          console.log(res.data)
          setRows(
            res.data.promoterCampaigns.map((item, index) => {
              return createData(
                index + 1 + rowsPerPage * page,
                item.dateTime ? item.dateTime : "",
                item.campaignId ? item.campaignId : "",
                item.clientId ? item.clientId : "",
                item.adsCount ? item.adsCount : 0,
                item.budget ? item.budget : 0,
              );
            })
          );
        }
      }
    });
    // let res = response.data;
  }, [promoterId]);

  console.log("data rows ", rows)

  const [numOfRows, setNumOfRows] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const navigate = useNavigate();

  const editClickHandler = (listName) => {
    navigate(`edit?listname=${listName}`);
  };

  return (
    <Paper
      className="CreateCampaignStepper"
      sx={{
        p: 3,
        width: "100%",
        alignItems: "center",
        mt: 2,
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
        tableTitle={"Available Jobs"}
        // align={'center'}
        actions={(index) => {
          return (
            <>
              <ActionButton
                text="Visit Job"
                // icon={<BorderColor />}
                actionClickHandler={() => editClickHandler(index)}
              />
              {/* <ActionButton text="" icon={<RemoveCircle />} /> */}
            </>
          );
        }}
        isToolbarVisible={true}
      />

      <EnhancedTable
        headCells={HEAD_CELLS}
        rows={rows}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        numOfRows={numOfRows}
        hideMoreOptions
        tableTitle={"Ongoing Jobs"}
        // align={'center'}
        actions={(index) => {
          return (
            <>
              <ActionButton
                text="Complete"
                // icon={<BorderColor />}
                actionClickHandler={() => editClickHandler(index)}
              />
              {/* <ActionButton text="" icon={<RemoveCircle />} /> */}
            </>
          );
        }}
        isToolbarVisible={true}
      />

      <EnhancedTable
        headCells={HEAD_CELLS}
        rows={rows}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        numOfRows={numOfRows}
        hideMoreOptions
        tableTitle={"Finished Jobs"}
        // align={'center'}
        actions={(index) => {
          return (
            <>
              <ActionButton
                text="View"
                // icon={<BorderColor />}
                actionClickHandler={() => editClickHandler(index)}
              />
              {/* <ActionButton text="" icon={<RemoveCircle />} /> */}
            </>
          );
        }}
        isToolbarVisible={true}
      />
    </Paper>
  );
}

export default JobsView;
