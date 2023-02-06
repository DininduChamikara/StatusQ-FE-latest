import React, { useEffect, useState } from 'react'
import CampaignService from '../../api/services/CampaignService'
import PromoterCampaignService from '../../api/services/PromoterCampaignService';
import UserService from '../../api/services/UserService';
import EcommerceCampaignEarnings from '../../components/AdminDashboard/EcommerceCampaignEarnings'

function ReportChart({reportName}) {

    const [chartData, setChartData] = useState();
    const [chartTitle, setChartitle] = useState();

    useEffect(() => {
        if(reportName === "CAMPAIGNS"){
            setChartitle("Campaigns")
            const response = CampaignService.getChartData();
            response.then((res) => {
                if(res.data.responseCode === "00"){
                    res = res.data.chartData;
                    // console.log(res)
                    setChartData(res)
                }
                
            })
        }
        else if(reportName === "USERS"){
            setChartitle("User Creations")
            const response = UserService.getChartData();
            response.then((res) => {
                if(res.data.responseCode === "00"){
                    res = res.data.chartData;
                    setChartData(res)
                }
                
            })
        }
        else if(reportName === "ADMINS"){
            setChartitle("Admin Account Creations")
            const response = UserService.getChartAdminsData();
            response.then((res) => {
                if(res.data.responseCode === "00"){
                    res = res.data.chartData;
                    setChartData(res)
                }
                
            })
        }
        else if(reportName === "PROMOTER_CAMPAIGNS"){
            setChartitle("Promoter Campaigns")
            const response = PromoterCampaignService.getChartData();
            response.then((res) => {
                if(res.data.responseCode === "00"){
                    res = res.data.chartData;
                    setChartData(res)
                }
                
            })
        }

    }, [reportName])

  return (
    <div>
        <EcommerceCampaignEarnings chartData={chartData} chartTitle={chartTitle} />
    </div>
  )
}

export default ReportChart