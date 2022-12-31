import apiService from "../apiManager";

class PromoterService {
 
    async savePromoter(promoterInfo){
        return await apiService.apiPOST("/promoters", promoterInfo);
    }

    async getPromotersList(requestBody){
        return await apiService.apiPOST("/promoters/getPromotersList", requestBody);
    }

    async getPromoter(userId){
        return await apiService.apiGET(`/promoters/${userId}`)
    }
}

export default new PromoterService();