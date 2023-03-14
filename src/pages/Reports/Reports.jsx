import { Box, Card, CardHeader, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import DraggableView from "../../components/DraggableView/DraggableView";
import ReportTablesView from "../../components/ReportTablesView/ReportTablesView";
import { selectedReports } from "../../store/reducers/reports.slice";
import uuidv4 from "../../utils/uuidv4";
import ReportChart from "./ReportChart";

function Reports() {
  const dispatch = useDispatch();

  const { selectedReportsForView } = useSelector(
    (state) => state.selectedReports
  );

  const [selectedFields, setSelectedFields] = useState(
    selectedReportsForView
      ? selectedReportsForView
      : [
          {
            id: uuidv4(),
            title: "Campaigns",
            value: "CAMPAIGNS",
          },
        ]
  );
  // const [selectedFields, setSelectedFields] = useState([
  //   {
  //     id: uuidv4(),
  //     title: "Campaigns",
  //     value: "CAMPAIGNS",
  //   },
  // ]);

  const [reportTablesArr, setReportTablesArr] = useState(["CAMPAIGNS"]);

  useEffect(() => {
    dispatch(
      selectedReports({
        selectedReportsForView: selectedFields,
      })
    );

    let temp = [];
    selectedFields.map((item) => temp.push(item.value));

    setReportTablesArr(temp);
  }, [selectedFields]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader title="Select Reports" />
          <Box sx={{ p: 1, pt: 0 }}>
            <DraggableView
              isDragDisabled={false}
              maximumDraggings={3}
              setSelectedFields={setSelectedFields}
            />
          </Box>
        </Card>
      </Grid>

      <Grid item xs={12} md={6} lg={8}>
        <ReportChart
          reportName={reportTablesArr[0] ? reportTablesArr[0] : "none"}
        />
      </Grid>

      <Grid item xs={12} md={12}>
        <ReportTablesView reportTablesArr={reportTablesArr} />
      </Grid>
    </Grid>
  );
}

export default Reports;
