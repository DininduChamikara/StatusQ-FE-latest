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
}

export default new PromoterReviewService();
