import {
  AccountBox, AccountCircle, Campaign, Dashboard,
  ExitToApp,
  Help,
  Home, Payments, Reviews,
  Settings
} from "@mui/icons-material";

const ICONS = {
  dashboard: <Dashboard />,
  home: <Home />,
  clientView: <AccountBox />,
  promoterView: <Campaign />,
  payments: <Payments />,
  settings: <Settings />,
  profile: <AccountCircle/>,
  help: <Help />,
  feedback: <Reviews />,
  logout: <ExitToApp />,
};

const navConfig = [
  {
    items: [
      { title: "Home", path: "/home", icon: ICONS.home, authUser: "NORMAL_USER", },
      {
        title: "Client View",
        path: "/client-view",
        icon: ICONS.clientView,
        authUser: "NORMAL_USER",
      },
      {
        title: "Promoter View",
        path: "/promoter-view",
        icon: ICONS.promoterView,
        authUser: "NORMAL_USER",
      },
      {
        title: "Payments",
        path: "/payments",
        icon: ICONS.payments,
        authUser: "NORMAL_USER",
      },
      // {
      //   title: "Settings",
      //   path: "/settings",
      //   icon: ICONS.settings,
      //   authUser: "NORMAL_USER",
      // },
      {
        title: "Profile",
        path: "/profile",
        icon: ICONS.profile,
        authUser: "NORMAL_USER",
      },
      {
        title: "Help",
        path: "/help",
        icon: ICONS.help,
        authUser: "NORMAL_USER",
      },
      {
        title: "Feedback",
        path: "/feedback",
        icon: ICONS.feedback,
        authUser: "NORMAL_USER",
      },
      {
        title: "Home",
        path: "/admin_home",
        icon: ICONS.home,
        authUser: "ADMIN_USER",
      },
      {
        title: "Reports",
        path: "/admin_report",
        icon: ICONS.home,
        authUser: "ADMIN_USER",
      },
      {
        title: "Account",
        path: "/admin_account",
        icon: ICONS.home,
        authUser: "ADMIN_USER",
      },
      {
        title: "Complaints",
        path: "/admin_complaints",
        icon: ICONS.home,
        authUser: "ADMIN_USER",
      },
      // {
      //   title: "Logout",
      //   path: "/login",
      //   icon: ICONS.logout,
      //   authUser: "",
      // },
    ],
    subheader: "1",
  },
];

export default navConfig;
