import React, { useEffect, useState } from 'react'
import CampaignService from '../../api/services/CampaignService'
import EcommerceCampaignEarnings from '../../components/AdminDashboard/EcommerceCampaignEarnings'

function ReportChart({reportName}) {

    const [chartData, setChartData] = useState();

    useEffect(() => {
        if(reportName === "CAMPAIGNS"){
            const response = CampaignService.getChartData();
            response.then((res) => {
                if(res.data.responseCode === "00"){
                    res = res.data.chartData;
                    // console.log(res)
                    setChartData(res)
                }
                
            })
        }

    }, [reportName])

  return (
    <div>
        <EcommerceCampaignEarnings chartData={chartData}  />
    </div>
  )
}

export default ReportChart