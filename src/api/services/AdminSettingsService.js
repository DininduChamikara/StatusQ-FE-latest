import apiService from "../apiManager";

class AdminSettingsService {
 
    async saveSettings(requestBody){
        return await apiService.apiPOST("/adminSettings", requestBody);
    }
    async getSettings(){
        return await apiService.apiGET("/adminSettings");
    }
}

export default new AdminSettingsService();