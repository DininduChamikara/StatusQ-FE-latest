import apiService from "../apiManager";

class PaymentService {
 
    async savePaymentApprovel(paymentApprovelRequestBody){
        return await apiService.apiPOST("/paymentApprovels", paymentApprovelRequestBody);
    }
    async getPaymentApprovelByPromoterId(requestBody){
        return await apiService.apiPOST("/paymentApprovels/byPromoterId", requestBody);
    }
    async getEarningsDataByPromoterId(requestBody){
        return await apiService.apiPOST("/paymentApprovels/getEarnings/byPromoterId", requestBody);
    }
    async getAllPaymentApprovels(){
        return await apiService.apiGET(`/paymentApprovels`);
    }

}

export default new PaymentService();