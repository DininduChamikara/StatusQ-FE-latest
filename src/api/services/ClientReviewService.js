import apiService from "../apiManager";

class ClientReviewService {
  async saveClientReview(requestBody) {
    return await apiService.apiPOST("/clientReview", requestBody);
  }

  async getClientReviewByJobId(jobId) {
    return await apiService.apiGET(
      `/clientReview/getClientReviewByJobId/${jobId}`
    );
  }

  async getClientReviewsAvarageByClientId(clientId){
    return await apiService.apiGET(`/clientReview/getClientReviewsAvarageByClientId/${clientId}`)
  }
}

export default new ClientReviewService();
