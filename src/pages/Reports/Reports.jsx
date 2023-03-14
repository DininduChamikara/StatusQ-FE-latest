import { Box, Card, CardHeader, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import DraggableView from "../../components/DraggableView/DraggableView";
import ReportTablesView from "../../components/ReportTablesView/ReportTablesView";
import uuidv4 from "../../utils/uuidv4";
import ReportChart from "./ReportChart";

function Reports() {
  // const [selectedFields, setSelectedFields] = useState([]);
  const [selectedFields, setSelectedFields] = useState([
    {
      id: uuidv4(),
      title: "Campaigns",
      value: "CAMPAIGNS",
    },
  ]);

  const [reportTablesArr, setReportTablesArr] = useState(["CAMPAIGNS"]);

  useEffect(() => {
    let temp = [];
    selectedFields.map((item) => temp.push(item.value));

    setReportTablesArr(temp);
  }, [selectedFields]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader title="Select Reports" />
          <Box sx={{p:1, pt:0}}>
            <DraggableView
              isDragDisabled={false}
              maximumDraggings={3}
              setSelectedFields={setSelectedFields}
            />
          </Box>
        </Card>
      </Grid>

      <Grid item xs={12} md={6} lg={8}>
        <ReportChart reportName={reportTablesArr[0] ? reportTablesArr[0] : "none" }/>
      </Grid>

      <Grid item xs={12} md={12}>
        <ReportTablesView reportTablesArr={reportTablesArr} />
      </Grid>
    </Grid>
  );
}

export default Reports;
