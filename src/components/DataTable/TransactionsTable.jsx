import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PaymentService from "../../api/services/PaymentService";
import CampaignPaymentView from "../modals/campaignPaymentView";
import ActionButton from "../Table/ActionButton";
import EnhancedTable from "../Table/EnhancedTable";

function createData(no, paymentId, datetime, description, amount) {
  return { no, paymentId, datetime, description, amount };
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

  const getPaymentsRequestBody = {
    userId: userId,
    page: 0,
    pageCount: 10,
  };

  const [campaignPaymentViewOpened, setCampaignPaymentViewOpened] =
    useState(false);
  const [paymentViewData, setPaymentViewData] = useState();

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
                item._id ? item._id : "",
                item.dateTime ? item.dateTime : "",
                item._id
                  ? "Payment for the ads campaign *" + item._id + "*"
                  : "",
                item.amount ? "Rs. " + item.amount + ".00" : ""
              );
            })
          );
          setNumOfRows(res.data.total);
        }
      }
    });
  }, [userId, page, rowsPerPage]);

  const navigate = useNavigate();

  const viewClickHandler = (paymentId) => {
    const response = PaymentService.getPaymentById(paymentId);
    response.then((res) => {
      if (res.data.responseCode === "00") {
        setPaymentViewData(res.data.payment);
        setCampaignPaymentViewOpened(true);
      }
    });
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
      <CampaignPaymentView
        campaignPaymentViewOpened={campaignPaymentViewOpened}
        setCampaignPaymentViewOpened={setCampaignPaymentViewOpened}
        paymentViewData={paymentViewData}
      />
    </Box>
  );
}
