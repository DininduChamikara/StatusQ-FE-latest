import {
  AccountBox, AccountCircle, Assessment, Campaign, Dashboard,
  ExitToApp,
  Help,
  Home, Payments, QuestionAnswer, Reviews,
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
  reports: <Assessment/>,
  chat : <QuestionAnswer/>,
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
      {
        title: "Home",
        path: "/admin_home",
        icon: ICONS.dashboard,
        authUser: "ADMIN_USER",
      },
      {
        title: "Profile",
        path: "/profile",
        icon: ICONS.profile,
        authUser: "",
      },
      // {
      //   title: "Help",
      //   path: "/help",
      //   icon: ICONS.help,
      //   authUser: "NORMAL_USER",
      // },
      {
        title: "Feedback",
        path: "/feedback",
        icon: ICONS.feedback,
        authUser: "NORMAL_USER",
      },
      {
        title: "Reports",
        path: "/admin_report",
        icon: ICONS.reports,
        authUser: "ADMIN_USER",
      },
      // {
      //   title: "Account",
      //   path: "/admin_account",
      //   icon: ICONS.home,
      //   authUser: "ADMIN_USER",
      // },
      {
        title: "Settings",
        path: "/admin_settings",
        icon: ICONS.settings,
        authUser: "ADMIN_USER",
      },
      {
        title: "Complaints / Chats",
        path: "/chat_complaints",
        icon: ICONS.chat,
        authUser: "",
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
