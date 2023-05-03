import { capitalCase } from "change-case";
// @mui
import { Box, Tab, Tabs } from "@mui/material";
// routes
// hooks
import useTabs from "../../hooks/useTabs";
// _mock_
// components
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyIcon from "@mui/icons-material/Key";
import AccountChangePassword from "../User/Account/AccountChangePassword";
import AccountGeneral from "../User/Account/AccountGeneral";

export default function UserAccount() {

  const { currentTab, onChangeTab } = useTabs("general");

  const ACCOUNT_TABS = [
    {
      value: "general",
      icon: (
        <AccountBoxIcon icon={"ic:round-account-box"} width={20} height={20} />
      ),

      component: (
        <AccountGeneral />
      ),
    },
   
    {
      value: "change_password",
      icon: <KeyIcon icon={"ic:round-vpn-key"} width={20} height={20} />,

      component: <AccountChangePassword/>,
    },
  ];

  return (

    <Box sx={{ px: 0 }}>
      <Tabs
        allowScrollButtonsMobile
        variant="scrollable"
        scrollButtons="auto"
        value={currentTab}
        onChange={onChangeTab}
      >
        {ACCOUNT_TABS.map((tab) => (
          <Tab
            disableRipple
            key={tab.value}
            label={capitalCase(tab.value)}
            icon={tab.icon}
            value={tab.value}
          />
        ))}
      </Tabs>
      <Box sx={{ mb: 2 }} />
      {ACCOUNT_TABS.map((tab) => {
        const isMatched = tab.value === currentTab;
        return isMatched && <Box key={tab.value}>{tab.component}</Box>;
      })}
    </Box>
  );
}
