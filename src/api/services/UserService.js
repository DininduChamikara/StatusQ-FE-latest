import apiService from "../apiManager";

class UserService {
    async login(userInfo){
        return await apiService.apiPOST("/users/login", userInfo);
    }

    async changePassword(passwordChangeRequestBody){
        return await apiService.apiPOST("/users/changePassword", passwordChangeRequestBody);
    }

    async getUserByUserId(userId){
        return await apiService.apiGET(`/users/user/${userId}`);
    }

    async getUsersCount(){
        return await apiService.apiGET(`/users/usersCount`);
    }

    async getChartData(){
        return await apiService.apiGET(`/users/normal_users/chart_data`);
    }

    async getChartAdminsData(){
        return await apiService.apiGET(`/users/admin_users/chart_data`);
    }

    async saveUser(userInfo){
        return await apiService.apiPOST("/users", userInfo);
    }

    async saveSettings(settingsInfo){
        return await apiService.apiPOST("/users/saveSettings", settingsInfo)
    }

    async getAllUsers(){
        return await apiService.apiGET("/users")
    }
}

export default new UserService();