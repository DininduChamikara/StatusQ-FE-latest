import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PaymentApprovelService from "../../api/services/PaymentApprovelService";
import ActionButton from "../Table/ActionButton";
import EnhancedTable from "../Table/EnhancedTable";

function createData(no, paymentApprovelId, datetime, clientId, amount) {
  return { no, paymentApprovelId, datetime, clientId, amount };
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
    id: "clientId",
    numeric: false,
    disablePadding: false,
    label: "Client ID",
  },
  {
    id: "paymentAmount",
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

export default function PaymentReceivedTable() {
  const [rows, setRows] = useState([]);
  const { promoterId } = useSelector((state) => state.login);

  const [numOfRows, setNumOfRows] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const getPaymentApprovelsRequestBody = {
    promoterId: promoterId ? promoterId : "",
    page: 0,
    pageCount: 10,
  };

  useEffect(() => {
    // const response = PaymentService.getPayments(userId);
    const response = PaymentApprovelService.getPaymentApprovelByPromoterId({
      ...getPaymentApprovelsRequestBody,
      page: page,
      pageCount: rowsPerPage,
    });

    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {
          setRows(
            res.data.paymentApprovels.map((item, index) => {
              return createData(
                index + 1 + rowsPerPage * page,
                item._id ? item._id : "",
                item.dateTime ? item.dateTime : "",
                item.clientId ? item.clientId : "",
                item.paymentAmount ? "Rs. " + item.paymentAmount + ".00" : ""
              );
            })
          );
          setNumOfRows(res.data.total);
        }
      }
    });
    // let res = response.data;
  }, [promoterId, page, rowsPerPage]);

  const navigate = useNavigate();

  const viewClickHandler = (paymentId) => {};

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
        tableTitle={"Payment Received Records"}
        ignoreIndex={1}
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
    </Box>
  );
}
