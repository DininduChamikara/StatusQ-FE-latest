import { Box } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PaymentService from "../../api/services/PaymentService";
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
    id: "paymentId",
    numeric: false,
    disablePadding: false,
    label: "Payment ID",
  },
  {
    id: "dateTime",
    numeric: false,
    disablePadding: false,
    label: "Date Time",
  },
  {
    id: "senderId",
    numeric: false,
    disablePadding: false,
    label: "Sender ID",
  },
  {
    id: "campaignId",
    numeric: false,
    disablePadding: false,
    label: "Campaign ID",
  },
  {
    id: "amount",
    numeric: false,
    disablePadding: false,
    label: "Amount",
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

function createData(no, paymentId, dateTime, senderId, campaignId, amount) {
  return {
    no,
    paymentId,
    dateTime,
    senderId,
    campaignId,
    amount,
  };
}

function ClientPaymentDetailsTable() {
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);

  const [numOfRows, setNumOfRows] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [searchStr, setSearchStr] = useState("");

  const viewClickHandler = (jobId) => {
  };

  const requestBody = {
    page: page,
    pageCount: rowsPerPage,
  };

  useEffect(() => {
    const response = PaymentService.getAllPaymentsByPost({
      ...requestBody,
      page: page,
      pageCount: rowsPerPage,
    });

    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {
          let response = res.data.payments;

          let filtered = response.filter((x) => x.senderRole === "CLIENT");

          let searchFiltered = filtered.filter((item) =>
            item._id.includes(searchStr)
          );

          setRows(
            searchFiltered.map((item, index) => {
              return createData(
                index + 1 + rowsPerPage * page,
                item._id ? item._id : "",
                item.dateTime ? item.dateTime : "",
                item.senderID ? item.senderID : "",
                item.campaignId ? item.campaignId : "",
                item.amount ? item.amount : ""
              );
            })
          );
          setNumOfRows(res.data.total);
        }
      }
    });
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
        tableTitle={"Client Payment Details Report"}
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

export default ClientPaymentDetailsTable;
