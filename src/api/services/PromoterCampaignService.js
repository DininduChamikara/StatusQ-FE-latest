import apiService from "../apiManager";

class PromoterCampaignService {
 
    async savePromoterCampaign(requestBody){
        return await apiService.apiPOST("/promoterCampaigns", requestBody);
    }

    async getPromoterCampaigns(promoterId){
        return await apiService.apiGET(`/promoterCampaigns/${promoterId}`)
    }

    async getJobDetails(jobId){
        return await apiService.apiGET(`/promoterCampaigns/job/${jobId}`)
    }

    async updateState(updateStateRequestBody){
        return await apiService.apiPATCH(`/promoterCampaigns/updateState`, updateStateRequestBody.jobId, updateStateRequestBody)
    }

}

export default new PromoterCampaignService();