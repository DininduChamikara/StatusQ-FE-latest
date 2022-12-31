import {
  Box,
  Card,
  CardContent,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";
import AppexChart from "../../components/AppexChart/AppexChart";
import DoughnutChart from "../../components/DoughnutChart/DoughnutChart";
import SimpleLineChart from "../../components/SimpleLineChart/SimpleLineChart";

function Reports() {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        sx={{
          p: 3,
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Box
          sx={{
            border: 1,
            borderRadius: 5,
            borderColor: "grey.500",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            px: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 3,
              pr: 1,
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "1.8rem", fontWeight: "bold", mb: 0.5, textAlign:'center' }}
              >
                User Statistics
              </Typography>
              <Divider />
              <Box sx={{ display: "flex", gap: 3, mt:2.5 }}>
                <Card sx={{ minWidth: 200, backgroundColor: "#FFEEE5" }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                      Total Users
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
                      1926
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 200, backgroundColor: "#D8F6D8" }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                      Promoters
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
                      861
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box>
            <DoughnutChart />
          </Box>
          <Box>
            <SimpleLineChart />
          </Box>
        </Box>
      </Paper>

      <Paper
        sx={{
          p: 3,
          width: "100%",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Box
          sx={{
            border: 1,
            borderRadius: 5,
            borderColor: "grey.500",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            p: 3,
          }}
        >
          <Box sx={{ width: "40%" }}>
            <Typography
              sx={{ fontSize: "1.8rem", fontWeight: "bold", mb: 0.5, textAlign:'center' }}
            >
              Campaigns Statistics
            </Typography>
            <Divider />

            <Box
              sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2.5 }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="From Date"
                  value={value}
                  minDate={dayjs("2017-01-01")}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
                <DesktopDatePicker
                  label="To Date"
                  value={value}
                  minDate={dayjs("2017-01-01")}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
          </Box>

          <Box
            sx={{
              width: "60%",
              display: "flex",
              alignItems: "center",
              gap: 5,
              justifyContent: "flex-end",
            }}
          >
            <Card sx={{ width: 180, backgroundColor: "#FFEEE5" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  Ongoing
                </Typography>
                <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
                  1926
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: 180, backgroundColor: "#D8F6D8" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  Finished
                </Typography>
                <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
                  861
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: 180, backgroundColor: "#E6FFFD" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  Total
                </Typography>
                <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
                  861
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 0, justifyContent: "space-between" }}>
          <Box
            sx={{
              border: 1,
              borderRadius: 5,
              borderColor: "grey.500",
              width: "49%",
              alignItems: "center",
              p: 3,
              mt: 3,
              // mr:1,
            }}
          >
            <AppexChart title={"Campaigns"} />
          </Box>

          <Box
            sx={{
              border: 1,
              borderRadius: 5,
              borderColor: "grey.500",
              width: "49%",
              alignItems: "center",
              p: 3,
              mt: 3,
              // ml:1,
            }}
          >
            <AppexChart title={"Reviews & Ratings"} />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Reports;
