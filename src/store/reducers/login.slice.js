import { createSlice } from "@reduxjs/toolkit";


export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLoggedIn: false,
        userId: null,
        firstName: "",
        lastName: "",
        email: "",
        userType: "",
        profileImageurl:"",
        promoterId: "",
        imgUrl:"",
        contactName: "",
        contactEmail:"",
        contactPhone:"",
        accountStatus:"",
        bankName:"",
        branchName:"",
        branchCode:"",
        accountNumber:"",
        accountHolderName:"",
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userId = action.payload.userId;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.userType = action.payload.userType;
            state.profileImageurl = action.payload.profileImageurl;
            
            // state.promoterId = action.payload.promoterId;
            state.imgUrl= action.payload.imgUrl;
            state.contactName= action.payload.contactName;
            state.contactEmail= action.payload.contactEmail;
            state.contactPhone= action.payload.contactPhone;
            state.accountStatus= action.payload.accountStatus;
            state.bankName= action.payload.bankName;
            state.branchName= action.payload.branchName;
            state.branchCode= action.payload.branchCode;
            state.accountNumber= action.payload.accountNumber;
            state.accountHolderName= action.payload.accountHolderName;
        },

        changePromoterId: (state, action) => {
            state.promoterId = action.payload.promoterId;
        },

        logout: (state) => {
            state.isLoggedIn = false;
            state.userId = null;
            state.firstName = "";
            state.lastName = "";
            state.email = "";
            state.userType = "";
            state.profileImageurl = "";
        },   
    },
});

export const { login, changePromoterId, logout } = loginSlice.actions;
export default loginSlice.reducer;