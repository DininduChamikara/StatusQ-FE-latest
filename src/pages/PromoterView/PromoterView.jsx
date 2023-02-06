import { Box } from "@mui/material";
import React, { useState } from "react";
import BecomePromoterBanner from "../../components/BecomePromoterBanner/BecomePromoterBanner";
import JobsView from "../../components/JobsView/JobsView";
import PromoterSurveyStepper from "../../components/PromoterSurveyStepper/PromoterSurveyStepper";

function PromoterView() {
  const [visibleStepper, setVisibleStepper] = useState(false);
  return (
    <Box>
      <BecomePromoterBanner setVisibleStepper={setVisibleStepper} />
      {visibleStepper ? <PromoterSurveyStepper /> : <JobsView />}
    </Box>
  );
}

export default PromoterView;
