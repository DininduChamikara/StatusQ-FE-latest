import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    maxAdPostsForCampaign: 5,
    costPerView: 2,
    systemFee: 0.1,
    minimumThreshold: 10000,
    acceptTimeDuration: 12,
    completeTimeDuration: 12,
  },
  reducers: {
    adminSettings: (state, action) => {
      state.maxAdPostsForCampaign = action.payload.maxAdPostsForCampaign;
      state.costPerView = action.payload.costPerView;
      state.systemFee = action.payload.systemFee;
      state.minimumThreshold = action.payload.minimumThreshold;
      state.acceptTimeDuration = action.payload.acceptTimeDuration;
      state.completeTimeDuration = action.payload.completeTimeDuration;
    },
  },
});

export const { adminSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
