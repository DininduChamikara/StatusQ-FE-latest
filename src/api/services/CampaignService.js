import apiService from "../apiManager";

class CampaignService {
 
    async saveCampaign(requestBody){
        return await apiService.apiPOST("/campaigns", requestBody);
    }

    async getAllCampaigns(){
        return await apiService.apiGET(`/campaigns`);
    }

    async getAllCampaignsByPost(requestBody){
        return await apiService.apiPOST("/campaigns/getAllCampaigns", requestBody)
    }

    async getChartData(){
        return await apiService.apiGET(`/campaigns/chart_data`);
    }

    async getCampaignsByClient(clinetId){
        return await apiService.apiGET(`/campaigns/by_client/${clinetId}`)
    }

    async campaignsByClient(requestBody){
        return await apiService.apiPOST("/campaigns/by_client", requestBody)
    }

    async getCampaignById(campaignId){
        return await apiService.apiGET(`/campaigns/campaign/${campaignId}`)
    }


}

export default new CampaignService();