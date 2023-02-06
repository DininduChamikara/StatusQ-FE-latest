import { BorderColor, RemoveCircle } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PromoterCampaignService from "../../api/services/PromoterCampaignService";
import EnhancedTable from "../../components/Table/EnhancedTable";
import JobCompleteView from "../modals/JobCompleteView";
import JobDataView from "../modals/JobDataView";
import JobFinishedView from "../modals/JobFinishedView";
import ActionButton from "../Table/ActionButton";

// function createData(no, campaignId, clientID, numOfAds, budget, datetime,) {
//   return { no, campaignId, clientID, numOfAds, budget, datetime, };
// }

function createData(no, jobId, numOfAds, viewsRequired, budget, datetime,) {
  return { no, jobId, numOfAds, viewsRequired, budget, datetime, };
}

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
  // {
  //   id: "campaignId",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "Campaign ID",
  // },
  // {
  //   id: "clientID",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "Client ID",
  // },
  {
    id: "numOfAds",
    numeric: true,
    disablePadding: false,
    label: "Ads Count",
  },
  {
    id: "viewsRequired",
    numeric: true,
    disablePadding: false,
    label: "Required Views Amount",
  },
  {
    id: "budget",
    numeric: false,
    disablePadding: false,
    label: "Budget",
  },
  {
    id: "datetime",
    numeric: false,
    disablePadding: false,
    label: "Date/Time (Job Created)",
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

const HEAD_CELLS_ONGOING_JOBS = [
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
    id: "numOfAds",
    numeric: true,
    disablePadding: false,
    label: "Ads Count",
  },
  {
    id: "viewsRequired",
    numeric: true,
    disablePadding: false,
    label: "Required Views Amount",
  },
  {
    id: "budget",
    numeric: false,
    disablePadding: false,
    label: "Budget",
  },
  {
    id: "datetime",
    numeric: false,
    disablePadding: false,
    label: "Date/Time (Job Accepted)",
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

const HEAD_CELLS_FINISHED_JOBS = [
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
    id: "numOfAds",
    numeric: true,
    disablePadding: false,
    label: "Ads Count",
  },
  {
    id: "viewsRequired",
    numeric: true,
    disablePadding: false,
    label: "Required Views Amount",
  },
  {
    id: "budget",
    numeric: false,
    disablePadding: false,
    label: "Budget",
  },
  {
    id: "datetime",
    numeric: false,
    disablePadding: false,
    label: "Date/Time (Job Finished)",
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
  const [ongoingJobsRows, setOngoingJobsRows] = useState([]);
  const [finishedJobsRows, setFinishedJobsRows] = useState([]);

  const { promoterId } = useSelector((state) => state.login);

  // for available jobs
  const [numOfRows, setNumOfRows] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // for ongoing jobs
  const [numOfRowsOngoing, setNumOfRowsOngoing] = useState(0);
  const [pageOngoing, setPageOngoing] = useState(0);
  const [rowsPerPageOngoing, setRowsPerPageOngoing] = React.useState(10);

   // for finished jobs
   const [numOfRowsFinished, setNumOfRowsFinished] = useState(0);
   const [pageFinished, setPageFinished] = useState(0);
   const [rowsPerPageFinished, setRowsPerPageFinished] = React.useState(10);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openOngoing, setOpenOngoing] = useState(false);
  const handleOpenOngoing = () => setOpenOngoing(true);
  const handleCloseOngoing = () => setOpenOngoing(false);

  const [openFinished, setOpenFinished] = useState(false);
  const handleOpenFinished = () => setOpenFinished(true);
  const handleCloseFinished = () => setOpenFinished(false);

  const [jobId, setJobId] = useState();

  const requestBody = {
    promoterId: promoterId,
    page: 0,
    pageCount: 10, 
  }

  // for available jobs
  useEffect(() => {
    // const response = PromoterCampaignService.getPromoterCampaigns(promoterId);
    const response = PromoterCampaignService.promoterCampaignsByPromoterId({
      ...requestBody,
      page: page,
      pageCount: rowsPerPage,
    });

    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {

          // const filteredAvailableJobs = res.data;
          const filteredAvailableJobs = res.data.promoterCampaigns.filter( element => element.state ===  "AVAILABLE" );
          // const filteredOngoingJobs = res.data.promoterCampaigns.filter( element => element.state ===  "ACCEPTED" );
          // const filteredFinishedJobs = res.data.promoterCampaigns.filter( element => element.state ===  "COMPLETED" );

          setRows(
            filteredAvailableJobs.map((item, index) => {
              return createData(
                index + 1 + rowsPerPage * page,
                // item.campaignId ? item.campaignId : "",
                // item.clientId ? item.clientId : "",
                item.jobId ? item.jobId : "",
                item.adsCount ? item.adsCount : 0,
                item.requiredViews ? item.requiredViews : 0,
                item.budget ? item.budget : 0,
                item.dateTime ? item.dateTime : "",
              );
            })
          );

          setNumOfRows(filteredAvailableJobs ? filteredAvailableJobs.length : 0);

          // setOngoingJobsRows(
          //   filteredOngoingJobs.map((item, index) => {
          //     return createData(
          //       index + 1 + rowsPerPage * page,
          //       // item.campaignId ? item.campaignId : "",
          //       // item.clientId ? item.clientId : "",
          //       item.jobId ? item.jobId : "",
          //       item.adsCount ? item.adsCount : 0,
          //       item.requiredViews ? item.requiredViews : 0,
          //       item.budget ? item.budget : 0,
          //       item.acceptedTime ? item.acceptedTime : "",
          //     );
          //   })
          // );

          // setFinishedJobsRows(
          //   filteredFinishedJobs.map((item, index) => {
          //     return createData(
          //       index + 1 + rowsPerPage * page,
          //       // item.campaignId ? item.campaignId : "",
          //       // item.clientId ? item.clientId : "",
          //       item.jobId ? item.jobId : "",
          //       item.adsCount ? item.adsCount : 0,
          //       item.requiredViews ? item.requiredViews : 0,
          //       item.budget ? item.budget : 0,
          //       item.completedTime ? item.completedTime : "",
          //     );
          //   })
          // );
        }
      }
    });
  }, [promoterId]);

  // for ongoing jobs
  useEffect(() => {
    const response = PromoterCampaignService.promoterCampaignsByPromoterId({
      ...requestBody,
      page: pageOngoing,
      pageCount: rowsPerPageOngoing,
    });

    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {

          const filteredOngoingJobs = res.data.promoterCampaigns.filter( element => element.state ===  "ACCEPTED" );

          setOngoingJobsRows(
            filteredOngoingJobs.map((item, index) => {
              return createData(
                index + 1 + rowsPerPage * page,
                item.jobId ? item.jobId : "",
                item.adsCount ? item.adsCount : 0,
                item.requiredViews ? item.requiredViews : 0,
                item.budget ? item.budget : 0,
                item.acceptedTime ? item.acceptedTime : "",
              );
            })
          );
          setNumOfRowsOngoing(filteredOngoingJobs ? filteredOngoingJobs.length : 0);
        }
      }
    });
  }, [promoterId]);

  // for finished job
  useEffect(() => {
    const response = PromoterCampaignService.promoterCampaignsByPromoterId({
      ...requestBody,
      page: pageFinished,
      pageCount: rowsPerPageFinished,
    });

    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {

          const filteredFinishedJobs = res.data.promoterCampaigns.filter( element => element.state ===  "COMPLETED" );

          setFinishedJobsRows(
            filteredFinishedJobs.map((item, index) => {
              return createData(
                index + 1 + rowsPerPage * page,
                item.jobId ? item.jobId : "",
                item.adsCount ? item.adsCount : 0,
                item.requiredViews ? item.requiredViews : 0,
                item.budget ? item.budget : 0,
                item.completedTime ? item.completedTime : "",
              );
            })
          );
          setNumOfRowsFinished(filteredFinishedJobs.length);
        }
      }
    });
  }, [promoterId]);

  const viewClickHandler = (jobId) => {
    // navigate(`edit?listname=${listName}`);
    setJobId(jobId);
    handleOpen();
  };

  const completeClickHandler = (jobId) => {
    setJobId(jobId);
    handleOpenOngoing();
  }

  const viewFinishedClickHandler = (jobId) => {
    setJobId(jobId);
    handleOpenFinished();
  }

  return (
    <Box>
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
                  actionClickHandler={() => viewClickHandler(index)}
                />
                {/* <ActionButton text="" icon={<RemoveCircle />} /> */}
              </>
            );
          }}
          isToolbarVisible={true}
        />

        <EnhancedTable
          headCells={HEAD_CELLS_ONGOING_JOBS}
          rows={ongoingJobsRows}
          page={pageOngoing}
          setPage={setPageOngoing}
          rowsPerPage={rowsPerPageOngoing}
          setRowsPerPage={setRowsPerPageOngoing}
          numOfRows={numOfRowsOngoing}
          hideMoreOptions
          tableTitle={"Ongoing Jobs"}
          // align={'center'}
          actions={(index) => {
            return (
              <>
                <ActionButton
                  text="Complete"
                  // icon={<BorderColor />}
                  actionClickHandler={() => completeClickHandler(index)}
                />
                {/* <ActionButton text="" icon={<RemoveCircle />} /> */}
              </>
            );
          }}
          isToolbarVisible={true}
        />

        <EnhancedTable
          headCells={HEAD_CELLS_FINISHED_JOBS}
          rows={finishedJobsRows}
          page={pageFinished}
          setPage={setPageFinished}
          rowsPerPage={rowsPerPageFinished}
          setRowsPerPage={setRowsPerPageFinished}
          numOfRows={numOfRowsFinished}
          hideMoreOptions
          tableTitle={"Finished Jobs"}
          // align={'center'}
          actions={(index) => {
            return (
              <>
                <ActionButton
                  text="View"
                  // icon={<BorderColor />}
                  actionClickHandler={() => viewFinishedClickHandler(index)}
                />
                {/* <ActionButton text="" icon={<RemoveCircle />} /> */}
              </>
            );
          }}
          isToolbarVisible={true}
        />
      </Paper>
      <JobDataView open={open} onClose={handleClose} setOpen={setOpen} jobId={jobId} />
      <JobCompleteView open={openOngoing} onClose={handleCloseOngoing} setOpen={setOpenOngoing} jobId={jobId} />
      <JobFinishedView open={openFinished} onClose={handleCloseFinished} setOpen={setOpenFinished} jobId={jobId} />
    </Box>
  );
}

export default JobsView;
