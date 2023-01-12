import { Card, CardHeader } from '@mui/material'
import React from 'react'
import ApexSimpleDonutChart from './ApexSimpleDonutChart'

function GenderChartView() {
  return (
    <Card>
      <CardHeader title="Gender Audience" />
      <ApexSimpleDonutChart/>
    </Card>
  )
}

export default GenderChartView