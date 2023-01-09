import { Box, Card, Stack } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PromoterCampaignService from "../../api/services/PromoterCampaignService";
import PaymentApprovel from "../../components/modals/PaymentApprovel";
import ActionButton from "../../components/Table/ActionButton";
import EnhancedTable from "../../components/Table/EnhancedTable";

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
    id: "acceptedTime",
    numeric: false,
    disablePadding: false,
    label: "Accepted Time",
  },
  {
    id: "completedTime",
    numeric: false,
    disablePadding: false,
    label: "Completed Time",
  },
  {
    id: "state",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "paymentApproved",
    numeric: false,
    disablePadding: false,
    label: "Payment Approvel",
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
  _id,
  promoterId,
  acceptedTime,
  completedTime,
  state,
  paymentApproved
) {
  let paymentApprovel;
  if (paymentApproved) {
    paymentApprovel = "Approved";
  } else {
    paymentApprovel = "Not Approved";
  }
  return {
    no,
    _id,
    promoterId,
    acceptedTime,
    completedTime,
    state,
    paymentApprovel,
  };
}

function CampaignPromotersView({ campaignId }) {
  const [rows, setRows] = useState([]);

  const [numOfRows, setNumOfRows] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [jobId, setJobId] = useState();

  const viewClickHandler = (jobId) => {
    // navigate(`edit?listname=${listName}`);
    setJobId(jobId);
    handleOpen();
  };

  useEffect(() => {
    const response =
      PromoterCampaignService.getPromoterCampaignsByCampaign(campaignId);
    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {
          console.log(res.data);
          setRows(
            res.data.promoterCampaigns.map((item, index) => {
              return createData(
                index + 1 + rowsPerPage * page,
                item._id ? item._id : "",
                item.promoterId ? item.promoterId : "",
                item.acceptedTime ? item.acceptedTime : "",
                item.completedTime ? item.completedTime : "",
                item.state ? item.state : "",
                item.paymentApproved ? item.paymentApproved : ""
              );
            })
          );
        }
      }
    });
    // let res = response.data;
  }, [campaignId]);

  return (
    <Box>
      <Card>
        <Stack spacing={2} sx={{ p: 3 }}>
          <EnhancedTable
            headCells={HEAD_CELLS}
            rows={rows}
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            numOfRows={numOfRows}
            hideMoreOptions
            tableTitle={"Campaign Promoters"}
            // align={'center'}
            actions={(index) => {
              return (
                <>
                  <ActionButton
                    text="Visit Job"
                    // icon={<BorderColor />}
                    actionClickHandler={() => viewClickHandler(index)}
                  />
                  {/* <ActionButton text="" icon={<RemoveCircle />} /> */}
                </>
              );
            }}
            isToolbarVisible={true}
          />
        </Stack>
      </Card>
      <PaymentApprovel open={open} onClose={handleClose} setOpen={setOpen} jobId={jobId} />
    </Box>
  );
}

export default CampaignPromotersView;
