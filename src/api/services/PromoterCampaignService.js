import apiService from "../apiManager";

class PromoterCampaignService {
 
    async savePromoterCampaign(requestBody){
        return await apiService.apiPOST("/promoterCampaigns", requestBody);
    }

    async getPromoterCampaigns(promoterId){
        return await apiService.apiGET(`/promoterCampaigns/${promoterId}`)
    }

}

export default new PromoterCampaignService();