import apiService from "../apiManager";

class ReviewService {
 
    async saveReview(reviewInfo){
        return await apiService.apiPOST("/reviews", reviewInfo);
    }
    async getReviews(){
        return await apiService.apiGET("/reviews");
    }
}

export default new ReviewService();