import apiService from "../apiManager";

class UserService {
    async login(userInfo){
        return await apiService.apiPOST("/users/login", userInfo);
    }

    async changePassword(passwordChangeRequestBody){
        return await apiService.apiPOST("/users/changePassword", passwordChangeRequestBody);
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