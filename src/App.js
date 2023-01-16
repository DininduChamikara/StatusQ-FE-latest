import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommonBar from "./components/CommonBar/CommonBar.jsx";
import ProtectedRoute, {
  AdminUserProtectedRoute,
  NormalUserProtectedRoute,
} from "./components/ProtectedRoute/ProtectedRoute.jsx";
import SnackBar from "./components/SnackBar/SnackBar.jsx";
import ClientView from "./pages/ClientView/ClientView.jsx";
import Feedback from "./pages/Feedback/Feedback.jsx";
import Help from "./pages/Help/Help.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Payments from "./pages/Payments/Payments.jsx";
import PromoterView from "./pages/PromoterView/PromoterView.jsx";
import Register from "./pages/Register/Register.jsx";
import Reports from "./pages/Reports/Reports.jsx";
import Settings from "./pages/SettingsView/Settings.jsx";
import Profile from "./pages/Profile/Profile";
import DashboardLayout from "./layouts/dashboard";
import AdminHome from "./pages/AdminHome/AdminHome.jsx";
import AdminAccount from "./pages/AdminAccount/AdminAccount.jsx";
import AdminComplaints from "./pages/AdminComplaints/AdminComplaints.jsx";
import CampaignView from "./pages/CampaignView/CampaignView.jsx";
import UserView from "./components/ReportTablesView/UserView.jsx";
import PromoterCampaignsDetailsView from "./pages/Reports/PromoterCampaignsDetailsView.jsx";

function App() {
  const [userInfo, setUserInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    profileImgUrl: "",
    userType: "",
    state: "",
  });

  // console.log("User first name from app js firl is " + userInfo.fname);

  // const {firstName} = useSelector((state) => state.login)

  return (
    <div>
      <SnackBar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setUserInfo={setUserInfo} />} />
          <Route path="/register" element={<Register />} />

          {/* test adding DashboardLayout start */}
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
                // <NormalUserProtectedRoute>
                <Profile />
                // </NormalUserProtectedRoute>
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
              path="/admin_account"
              element={
                <AdminUserProtectedRoute>
                  <AdminAccount />
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
          {/* test adding DashboardLayout end */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
