import apiService from "../apiManager";

class UserService {
    async login(userInfo){
        return await apiService.apiPOST("/users/login", userInfo);
    }

    async saveUser(userInfo){
        return await apiService.apiPOST("/users", userInfo);
    }

    async saveSettings(settingsInfo){
        return await apiService.apiPOST("/users/saveSettings", settingsInfo)
    }
}

export default new UserService();