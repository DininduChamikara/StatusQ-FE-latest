import apiService from "../apiManager";

class PaymentService {
 
    async savePayment(paymentInfo){
        return await apiService.apiPOST("/payments", paymentInfo);
    }
    async getPayments(userId){
        return await apiService.apiGET(`/payments/${userId}`);
    }
}

export default new PaymentService();