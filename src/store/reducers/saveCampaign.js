import { createSlice } from "@reduxjs/toolkit";

export const saveCampaignSlice = createSlice({
  name: "saveCampaign",
  initialState: {
    platform: "",
    schoolCat: false,
    universityCat: false,
    olCat: false,
    alCat: false,
    subMaths: false,
    subBio: false,
    subCommerce: false,
    subArt: false,
    subTechnology: false,
    undergraduateCat: false,
    postgraduateCat: false,
    ageGroup_13_15: false,
    ageGroup_16_18: false,
    ageGroup_19_25: false,
    ageGroup_26_35: false,
    ageGroup_36_60: false,
    ageGroup_over_60: false,
    western: false,
    uva: false,
    sabaragamuwa: false,
    central: false,
    nothern: false,
    northernWestern: false,
    southern: false,
    eastern: false,
    northCentral: false,
    sinhala: false,
    tamil: false,
    english: false,
    male: false,
    female: false,
    selectedAdvertisements: [],
    minRequiredViews: 1000,
    viewsFromEach: 50,
    numOfPromoters: 20,
    promoterListResponse: null,
    selectedPromoterIdList: [],
    selectedPromoterForView: null,
    advertisementSavedForUpload: false,
  },
  reducers: {
    changeCampaignAudienceDetails: (state, action) => {
      state.platform = action.payload.platform;
      state.schoolCat = action.payload.schoolCat;
      state.universityCat = action.payload.universityCat;
      state.olCat = action.payload.olCat;
      state.alCat = action.payload.alCat;
      state.subMaths = action.payload.subMaths;
      state.subBio = action.payload.subBio;
      state.subCommerce = action.payload.subCommerce;
      state.subArt = action.payload.subArt;
      state.subTechnology = action.payload.subTechnology;
      state.undergraduateCat = action.payload.undergraduateCat;
      state.postgraduateCat = action.payload.postgraduateCat;
      state.ageGroup_13_15 = action.payload.ageGroup_13_15;
      state.ageGroup_16_18 = action.payload.ageGroup_16_18;
      state.ageGroup_19_25 = action.payload.ageGroup_19_25;
      state.ageGroup_26_35 = action.payload.ageGroup_26_35;
      state.ageGroup_36_60 = action.payload.ageGroup_36_60;
      state.ageGroup_over_60 = action.payload.ageGroup_over_60;
      state.western = action.payload.western;
      state.uva = action.payload.uva;
      state.sabaragamuwa = action.payload.sabaragamuwa;
      state.central = action.payload.central;
      state.nothern = action.payload.nothern;
      state.northernWestern = action.payload.northernWestern;
      state.southern = action.payload.southern;
      state.eastern = action.payload.eastern;
      state.northCentral = action.payload.northCentral;
      state.sinhala = action.payload.sinhala;
      state.tamil = action.payload.tamil;
      state.english = action.payload.english;
      state.male = action.payload.male;
      state.female = action.payload.female;
    },
    changeCampaignAdvertisements: (state, action) => {
      state.selectedAdvertisements = action.payload.selectedAdvertisements;
    },
    changeCampaignViewsInfo: (state, action) => {
      state.minRequiredViews = action.payload.minRequiredViews;
      state.viewsFromEach = action.payload.viewsFromEach;
      state.numOfPromoters = action.payload.numOfPromoters;
    },
    changePromoterListResponse: (state, action) => {
      state.promoterListResponse = action.payload.promoterListResponse;
    },
    changeSelectedPromotersList: (state, action) => {
      state.selectedPromoterIdList = action.payload.selectedPromoterIdList;
    },
    changeSelectedPromoterForView: (state, action) => {
      state.selectedPromoterForView = action.payload.selectedPromoterForView;
    },
    changeAdvertisementSavedForUpload: (state, action) => {
      state.advertisementSavedForUpload = action.payload.advertisementSavedForUpload;
    }
  },
});

export const {
  changeCampaignAudienceDetails,
  changeCampaignAdvertisements,
  changeCampaignViewsInfo,
  changePromoterListResponse,
  changeSelectedPromotersList,
  changeSelectedPromoterForView,
  changeAdvertisementSavedForUpload,
} = saveCampaignSlice.actions;
export default saveCampaignSlice.reducer;
