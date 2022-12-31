import {
  Box,
  Divider,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CardPayment from "./CardPayment";
import PayOnEarnings from "./PayOnEarnings";

const CHARGE_PER_VIEW = 2;
const SYSTEM_FEE_PERCENTAGE = 0.10;

function CampaignPayment() {

  const {selectedPromoterIdList, viewsFromEach, selectedAdvertisements} = useSelector((state) => state.saveCampaign);

  const selectedPromotersCount = selectedPromoterIdList ? selectedPromoterIdList.length : 0;
  const NUM_OF_ADS = selectedAdvertisements ? selectedAdvertisements.length : 0;

  const COST_BEFORE_SYSTEM_FEE = selectedPromotersCount*viewsFromEach*NUM_OF_ADS*CHARGE_PER_VIEW;
  const SYSTEM_FEE = COST_BEFORE_SYSTEM_FEE*SYSTEM_FEE_PERCENTAGE;

  const [alignment, setAlignment] = React.useState("CARD_PAYMENT");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box>
      <Paper variant="outlined" sx={{ width: "100%", p: 1, mb: 1 }}>
        <Box
          sx={{ display: {xs:'block', lg:'flex'}, flexDirection: "row", width: "100%", mt: 1 }}
        >
          <Box
            sx={{
              width: {xs:'100%', lg:'40%'},
              display: "flex",
              justifyContent: {xs:'flex-start', lg:'flex-end'},
              alignItems: "center",
              px: 1,
            }}
          >
            <Typography sx={{ color: "secondary.dark" }}>
              Selected Promoters Count
            </Typography>
          </Box>

          <Box sx={{ width: {xs:'100%', lg:'60%'}}}>
            <TextField
              disabled
              sx={{ pl: 1, width: "96%" }}
              placeholder="Count"
              value={selectedPromotersCount}
              size="small"
            ></TextField>
          </Box>
        </Box>

        <Box
          sx={{ display: {xs:'block', lg:'flex'}, flexDirection: "row", width: "100%", mt: 1 }}
        >
          <Box
            sx={{
              width: {xs:'100%', lg:'40%'},
              display: "flex",
              justifyContent: {xs:'flex-start', lg:'flex-end'},
              alignItems: "center",
              px: 1,
            }}
          >
            <Typography sx={{ color: "secondary.dark" }}>
              Required minimum amount of views from each
            </Typography>
          </Box>

          <Box sx={{ width: {xs:'100%', lg:'60%'} }}>
            <TextField
              disabled
              sx={{ pl: 1, width: "96%" }}
              placeholder="number of views"
              value={viewsFromEach}
              size="small"
            ></TextField>
          </Box>
        </Box>

        <Box
          sx={{ display: {xs:'block', lg:'flex'}, flexDirection: "row", width: "100%", mt: 1 }}
        >
          <Box
            sx={{
              width: {xs:'100%', lg:'40%'},
              display: "flex",
              justifyContent: {xs:'flex-start', lg:'flex-end'},
              alignItems: "center",
              px: 1,
            }}
          >
            <Typography sx={{ color: "secondary.dark" }}>
              Finalized expected views amount
            </Typography>
          </Box>

          <Box sx={{ width: {xs:'100%', lg:'60%'} }}>
            <TextField
              disabled
              sx={{ pl: 1, width: "96%" }}
              placeholder="views amount"
              value={selectedPromotersCount*viewsFromEach}
              size="small"
            ></TextField>
          </Box>
        </Box>

        <Box
          sx={{ display: {xs:'block', lg:'flex'}, flexDirection: "row", width: "100%", mt: 1 }}
        >
          <Box
            sx={{
              width: {xs:'100%', lg:'40%'},
              display: "flex",
              justifyContent: {xs:'flex-start', lg:'flex-end'},
              alignItems: "center",
              px: 1,
            }}
          >
            <Typography sx={{ color: "secondary.dark" }}>
              Number of advertisement posts
            </Typography>
          </Box>

          <Box sx={{ width: {xs:'100%', lg:'60%'} }}>
            <TextField
              disabled
              sx={{ pl: 1, width: "96%" }}
              placeholder="views amount"
              value={NUM_OF_ADS}
              size="small"
            ></TextField>
          </Box>
        </Box>

        <Box
          sx={{ display: {xs:'block', lg:'flex'}, flexDirection: "row", width: "100%", mt: 1 }}
        >
          <Box
            sx={{
              width: {xs:'100%', lg:'40%'},
              display: "flex",
              justifyContent: {xs:'flex-start', lg:'flex-end'},
              alignItems: "center",
              px: 1,
            }}
          >
            <Typography sx={{ color: "secondary.dark" }}>System Fee (10%)</Typography>
          </Box>

          <Box sx={{ width: {xs:'100%', lg:'60%'} }}>
            <TextField
              disabled
              sx={{ pl: 1, width: "96%" }}
              placeholder="Name"
              value={"Rs. " + SYSTEM_FEE }
              size="small"
            ></TextField>
          </Box>
        </Box>

        <Box
          sx={{ display: {xs:'block', lg:'flex'}, flexDirection: "row", width: "100%", mt: 1 }}
        >
          <Box
            sx={{
              width: {xs:'100%', lg:'40%'},
              display: "flex",
              justifyContent: {xs:'flex-start', lg:'flex-end'},
              alignItems: "center",
              px: 1,
            }}
          >
            <Typography sx={{ color: "secondary.dark" }}>
              Finalized Total Campaign Cost
            </Typography>
          </Box>

          <Box sx={{ width: {xs:'100%', lg:'60%'} }}>
            <TextField
              disabled
              sx={{ pl: 1, width: "96%" }}
              placeholder="Name"
              value={"Rs. " +  (COST_BEFORE_SYSTEM_FEE + SYSTEM_FEE)}
              size="small"
            ></TextField>
          </Box>
        </Box>
      </Paper>
      <Paper variant="outlined" sx={{ width: "100%", p: 1, mb: 1, mt:2 }}>
        <Box sx={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <ToggleButtonGroup
            sx={{ mb: 1 }}
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            size="small"
          >
            <ToggleButton
              sx={{ width: {xs:130, lg:200}, fontWeight: "bold" }}
              color="primary"
              value="CARD_PAYMENT"
            >
              Card Payment
            </ToggleButton>
            <ToggleButton
              sx={{ width: {xs:130, lg:200}, fontWeight: "bold" }}
              color="secondary"
              value="PAYMENT_ON_EARNINGS"
            >
              Pay on your earnings
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Divider />
        {alignment === "CARD_PAYMENT" && <CardPayment />}
        {alignment === "PAYMENT_ON_EARNINGS" && <PayOnEarnings />}
      </Paper>
    </Box>
  );
}

export default CampaignPayment;
