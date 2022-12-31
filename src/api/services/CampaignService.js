import apiService from "../apiManager";

class CampaignService {
 
    async saveCampaign(requestBody){
        return await apiService.apiPOST("/campaigns", requestBody);
    }

}

export default new CampaignService();