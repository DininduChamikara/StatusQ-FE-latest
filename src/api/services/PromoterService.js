import apiService from "../apiManager";

class PromoterService {
 
    async savePromoter(promoterInfo){
        return await apiService.apiPOST("/promoters", promoterInfo);
    }

    async getPromotersList(requestBody){
        return await apiService.apiPOST("/promoters/getPromotersList", requestBody);
    }

    async getPromoter(userId){
        return await apiService.apiGET(`/promoters/${userId}`);
    }

    async getPromoterByUserId(userId){
        return await apiService.apiGET(`/promoters/promoter/${userId}`);
    }

    async getAllPromoters(){
        return await apiService.apiGET("/promoters");
    }

    async getPromotersCount(){
        return await apiService.apiGET("/promoters/getPromotersCount");
    }

    async getAllPromotersByPost(requestBody){
        return await apiService.apiPOST("/promoters/getAllPromoters", requestBody)
    }

    async getChartData(){
        return await apiService.apiGET("/promoters/promotersChart/chart_data");
    }
}

export default new PromoterService();