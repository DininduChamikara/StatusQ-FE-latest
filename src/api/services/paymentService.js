import apiService from "../apiManager";

class PaymentService {

    async getPaymentsForDashboard(){
        return await apiService.apiGET('/payments/dashboard/chart_data');
    }
 
    async savePayment(paymentInfo){
        return await apiService.apiPOST("/payments", paymentInfo);
    }
    async getPayments(userId){
        return await apiService.apiGET(`/payments/${userId}`);
    }

    async getPaymentById(paymentId){
        return await apiService.apiGET(`/payments/paymentById/${paymentId}`);
    }

    async getPaymentsByUserId(requestBody){
        return await apiService.apiPOST('/payments/byUserId', requestBody)
    }

    async getAllPaymentsByPost(requestBody){
        return await apiService.apiPOST('/payments/getClientPaymentsByPost', requestBody)
    }

    async getAllPayments(){
        return await apiService.apiGET("/payments");
    }

    async getChartData(){
        return await apiService.apiGET("/payments/paymentsChart/chart_data");
    }
}

export default new PaymentService();