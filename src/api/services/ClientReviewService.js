import apiService from "../apiManager";

class ClientReviewService {
  async saveClientReview(requestBody) {
    return await apiService.apiPOST("/clientReview", requestBody);
  }

  async getClientReviewByJobId(jobId){
    return await apiService.apiGET(`/clientReview/getClientReviewByJobId/${jobId}`)
}
}

export default new ClientReviewService();
