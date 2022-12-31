import { createSlice } from "@reduxjs/toolkit";

export const activeStepSlice = createSlice({
    name: "activeStep",
    initialState: {
        promoterStepperActive: 0,
        adCampaignStepperActive: 0,
    },
    reducers: {
        promoterActiveStep: (state, action) => {
            state.promoterStepperActive = action.payload.promoterStepperActive;
        }
    }
})

export const {promoterActiveStep} = activeStepSlice.actions;
export default activeStepSlice.reducer;