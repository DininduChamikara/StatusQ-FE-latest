import apiService from "../apiManager";

class PromoterCampaignService {
 
    async savePromoterCampaign(requestBody){
        return await apiService.apiPOST("/promoterCampaigns", requestBody);
    }

    async getAllPromoterCampaigns(){
        return await apiService.apiGET("/promoterCampaigns/promoterCampaignsAll");
    }

    async getPromoterCampaignsByPost(requestBody){
        return await apiService.apiPOST("/promoterCampaigns/promoterCampaignsAll", requestBody);
    }

    async getPromoterCampaigns(promoterId){
        return await apiService.apiGET(`/promoterCampaigns/${promoterId}`)
    }

    async promoterCampaignsByPromoterId(requestBody){
        return await apiService.apiPOST("/promoterCampaigns/byPromoterId", requestBody);
    }

    async getPromoterCampaignsByCampaign(campaignId){
        return await apiService.apiGET(`/promoterCampaigns/promoterCampaignsByCampaign/${campaignId}`)
    }

    async getJobDetails(jobId){
        return await apiService.apiGET(`/promoterCampaigns/job/${jobId}`)
    }

    async getChartData(){
        return await apiService.apiGET(`/promoterCampaigns/chart/chart_data`);
    }

    async updateState(updateStateRequestBody){
        return await apiService.apiPATCH(`/promoterCampaigns/updateState`, updateStateRequestBody.jobId, updateStateRequestBody)
    }

    async updatePaymentApproved(updatePaymentApprovelRequestBody){
        return await apiService.apiPATCH(`/promoterCampaigns/updatePaymentApproved`, updatePaymentApprovelRequestBody.jobId, updatePaymentApprovelRequestBody)
    }

}

export default new PromoterCampaignService();