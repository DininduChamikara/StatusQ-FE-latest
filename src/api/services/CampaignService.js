import apiService from "../apiManager";

class CampaignService {
 
    async saveCampaign(requestBody){
        return await apiService.apiPOST("/campaigns", requestBody);
    }

    async getCampaignsByClient(clinetId){
        return await apiService.apiGET(`/campaigns/by_client/${clinetId}`)
    }

}

export default new CampaignService();