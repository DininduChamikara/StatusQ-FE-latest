import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomAPILoader from "./components/CustomAPILoader/index.jsx";
import ProtectedRoute, {
  AdminUserProtectedRoute,
  NormalUserProtectedRoute,
} from "./components/ProtectedRoute/ProtectedRoute.jsx";
import UserView from "./components/ReportTablesView/UserView.jsx";
import SnackBar from "./components/SnackBar/SnackBar.jsx";
import DashboardLayout from "./layouts/dashboard";
import AdminComplaints from "./pages/AdminComplaints/AdminComplaints.jsx";
import AdminHome from "./pages/AdminHome/AdminHome.jsx";
import AdminSettings from "./pages/AdminSettings/AdminSettings.jsx";
import CampaignView from "./pages/CampaignView/CampaignView.jsx";
import ClientView from "./pages/ClientView/ClientView.jsx";
import Feedback from "./pages/Feedback/Feedback.jsx";
import Help from "./pages/Help/Help.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Payments from "./pages/Payments/Payments.jsx";
import Profile from "./pages/Profile/Profile";
import PromoterView from "./pages/PromoterView/PromoterView.jsx";
import Register from "./pages/Register/Register.jsx";
import PromoterCampaignsDetailsView from "./pages/Reports/PromoterCampaignsDetailsView.jsx";
import Reports from "./pages/Reports/Reports.jsx";
import Settings from "./pages/SettingsView/Settings.jsx";

function App() {
  const [userInfo, setUserInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    profileImgUrl: "",
    userType: "",
    state: "",
  });

  return (
    <div>
      <SnackBar />
      <CustomAPILoader />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setUserInfo={setUserInfo} />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route
              path="/home"
              element={
                <NormalUserProtectedRoute>
                  <Home />
                </NormalUserProtectedRoute>
              }
            />
            <Route
              path="/client-view"
              element={
                <NormalUserProtectedRoute>
                  <ClientView />
                </NormalUserProtectedRoute>
              }
            />
            <Route
              path="/client-view/campaign-view"
              element={
                // <NormalUserProtectedRoute>
                  <CampaignView />
                // </NormalUserProtectedRoute>
              }
            />
            <Route
              path="/promoter-view"
              element={
                <NormalUserProtectedRoute>
                  <PromoterView />
                </NormalUserProtectedRoute>
              }
            />
            <Route
              path="/payments"
              element={
                <NormalUserProtectedRoute>
                  <Payments />
                </NormalUserProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <NormalUserProtectedRoute>
                  <Settings />
                </NormalUserProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <Profile />
              }
            />
            <Route
              path="/help"
              element={
                <NormalUserProtectedRoute>
                  <Help />
                </NormalUserProtectedRoute>
              }
            />
            <Route
              path="/feedback"
              element={
                <NormalUserProtectedRoute>
                  <Feedback />
                </NormalUserProtectedRoute>
              }
            />

            <Route
              path="/admin_home"
              element={
                <AdminUserProtectedRoute>
                  <AdminHome />
                </AdminUserProtectedRoute>
              }
            />

            <Route
              path="/admin_report"
              element={
                <AdminUserProtectedRoute>
                  <Reports />
                </AdminUserProtectedRoute>
              }
            />

            <Route
              path="/admin_report/promoter_campaign_view"
              element={
                <AdminUserProtectedRoute>
                  <PromoterCampaignsDetailsView />
                </AdminUserProtectedRoute>
              }
            />

            <Route path="/user_view" element={<UserView />} />

            <Route
              path="/admin_settings"
              element={
                <AdminUserProtectedRoute>
                  <AdminSettings />
                </AdminUserProtectedRoute>
              }
            />

            <Route
              path="/chat_complaints"
              element={
                // <AdminUserProtectedRoute>
                <AdminComplaints />
                // </AdminUserProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
