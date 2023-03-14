import { createSlice } from "@reduxjs/toolkit";
import uuidv4 from "../../utils/uuidv4";

export const reportsSlice = createSlice({
  name: "reports",
  initialState: {
    selectedReportsForView: [
      {
        id: uuidv4(),
        title: "Campaigns",
        value: "CAMPAIGNS",
      },
    ],
    draggableViewData: [
      {
        id: uuidv4(),
        title: "All Reports",
        fields: [
          {
            id: uuidv4(),
            title: "Users",
            value: "USERS",
          },
          {
            id: uuidv4(),
            title: "Promoters",
            value: "PROMOTERS",
          },
          {
            id: uuidv4(),
            title: "Admin",
            value: "ADMINS",
          },
          {
            id: uuidv4(),
            title: "Promoter Campaigns",
            value: "PROMOTER_CAMPAIGNS",
          },
          {
            id: uuidv4(),
            title: "Client Payments",
            value: "CLIENT_PAYMENT",
          },
          {
            id: uuidv4(),
            title: "System Earnings",
            value: "SYSTEM_EARNINGS",
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Selections",
        fields: [
          {
            id: uuidv4(),
            title: "Campaigns",
            value: "CAMPAIGNS",
          },
        ],
      },
    ],
  },
  reducers: {
    selectedReports: (state, action) => {
      state.selectedReportsForView = action.payload.selectedReportsForView;
    },
    setDraggableViewData: (state, action) => {
      state.draggableViewData = action.payload.draggableViewData;
    },
  },
});

export const { selectedReports, setDraggableViewData } = reportsSlice.actions;
export default reportsSlice.reducer;
