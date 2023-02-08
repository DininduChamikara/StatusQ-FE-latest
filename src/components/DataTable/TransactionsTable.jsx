import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PaymentService from "../../api/services/PaymentService";
import ActionButton from "../Table/ActionButton";
import EnhancedTable from "../Table/EnhancedTable";

// const columns = [
//   {
//     field: "id",
//     headerName: "ID",
//     width: 120,
//     headerAlign: "left",
//     align: "left",
//   },
//   {
//     field: "date",
//     headerName: "Date",
//     width: 200,
//     headerAlign: "left",
//     align: "left",
//   },
//   {
//     field: "description",
//     headerName: "Description",
//     type: "text",
//     width: 680,
//     headerAlign: "left",
//     align: "left",
//   },
//   {
//     field: "amount",
//     headerName: "Amount",
//     width: 120,
//     headerAlign: "right",
//     align: "right",
//   },
// ];

// const rows = [
//   {
//     id: 1,
//     date: "23/02/2022",
//     description: "Payment for AD-001-002 from CLI-002-300",
//     amount: "Rs. 500.00",
//   },
//   {
//     id: 2,
//     date: "23/02/2022",
//     description: "Payment for AD-001-002 from CLI-002-300",
//     amount: "Rs. 500.00",
//   },
//   {
//     id: 3,
//     date: "23/02/2022",
//     description: "Payment for AD-001-002 from CLI-002-300",
//     amount: "Rs. 500.00",
//   },
//   {
//     id: 4,
//     date: "23/02/2022",
//     description: "Payment for AD-001-002 from CLI-002-300",
//     amount: "Rs. 500.00",
//   },
//   {
//     id: 5,
//     date: "23/02/2022",
//     description: "Payment for AD-001-002 from CLI-002-300",
//     amount: "Rs. 500.00",
//   },
//   {
//     id: 6,
//     date: "23/02/2022",
//     description: "Payment for AD-001-002 from CLI-002-300",
//     amount: "Rs. 500.00",
//   },
//   {
//     id: 7,
//     date: "23/02/2022",
//     description: "Payment for AD-001-002 from CLI-002-300",
//     amount: "Rs. 500.00",
//   },
// ];

function createData(no, datetime, description, amount) {
  return { no, datetime, description, amount };
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
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Description",
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

export default function TransactionTable() {

  const [rows, setRows] = useState([]);
  const { userId } = useSelector((state) => state.login);

  const [numOfRows, setNumOfRows] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const getPaymentsRequestBody ={
    userId: userId,
    page: 0,
    pageCount: 10,
  }

  useEffect(() => {
    // const response = PaymentService.getPayments(userId);
    const response = PaymentService.getPaymentsByUserId({
      ...getPaymentsRequestBody,
      page: page,
      pageCount: rowsPerPage,
    });

    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {
          setRows(
            res.data.payments.map((item, index) => {
              return createData(
                index + 1 + rowsPerPage * page,
                item.dateTime ? item.dateTime : "",
                item._id ? ("Payment for the ads campaign *" + item._id + "*") : "",
                item.amount ? ("Rs. " + item.amount + ".00") : "",
              );
            })
          );
          setNumOfRows(res.data.total);
        }
      }
    });
    // let res = response.data;
  }, [userId, page, rowsPerPage]);

  const navigate = useNavigate();

  const editClickHandler = (listName) => {
    navigate(`edit?listname=${listName}`);
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
        tableTitle={"Your Ad Campaigns Payments"}
        // align={'center'}
        actions={(index) => {
          return (
            <>
              <ActionButton
                text="View"
                actionClickHandler={() => editClickHandler(index)}
              />
            </>
          );
        }}
        isToolbarVisible={true}
      />
    </Box>
  );
}
