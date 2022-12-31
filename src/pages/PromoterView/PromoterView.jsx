import { Box } from '@mui/material'
import React from 'react'
import BecomePromoterBanner from '../../components/BecomePromoterBanner/BecomePromoterBanner'
import JobsView from '../../components/JobsView/JobsView'
import PromoterSurveyStepper from '../../components/PromoterSurveyStepper/PromoterSurveyStepper'

function PromoterView() {
  return (
    <Box>
      <BecomePromoterBanner/>
      <PromoterSurveyStepper/>
      <JobsView/>

    </Box>
  )
}

export default PromoterView