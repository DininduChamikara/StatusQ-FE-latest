import apiService from "../apiManager";

class PromoterReviewService {
  async savePromoterReview(requestBody) {
    return await apiService.apiPOST("/promoterReview", requestBody);
  }

  async getPromoterReviewByJobId(jobId) {
    return await apiService.apiGET(
      `/promoterReview/getPromterReviewByJobId/${jobId}`
    );
  }

  async getPromoterReviewsByPromoterId(promoterId){
    return await apiService.apiGET(`/promoterReview/getPromterReviewsByPromoterId/${promoterId}`)
  }

  async getPromoterReviewsChartDataByPromoterId(promoterId){
    return await apiService.apiGET(`/promoterReview/getPromterReviewsChartDataByPromoterId/${promoterId}`)
  }
}

export default new PromoterReviewService();
