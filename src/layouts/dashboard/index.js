import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { Box, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
// hooks
import useResponsive from '../../hooks/useResponsive';
import useSettings from '../../hooks/useSettings';
// config
import { HEADER, NAVBAR } from '../../config';
//
import palette from '../../theme/palette';
import DashboardHeader from './header';
import NavbarHorizontal from './navbar/NavbarHorizontal';
import NavbarVertical from './navbar/NavbarVertical';

// ----------------------------------------------------------------------

const MainStyle = styled('main', {
  shouldForwardProp: (prop) => prop !== 'collapseClick',
})(({ collapsed, theme }) => ({
  flexGrow: 1,
  backgroundColor: palette.light.background.neutral,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  minHeight: '100vh',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT - 60,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    transition: theme.transitions.create('margin-left', {
      duration: theme.transitions.duration.shorter,
    }),
    ...(collapsed && {
      marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH - 88,
    }),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const { themeLayout } = useSettings();

  const isDesktop = useResponsive('up', 'lg');

  const [open, setOpen] = useState(false);

  const verticalLayout = themeLayout === 'vertical';

  const [collapsed, setCollapsed] = useState(true);

  const theme = useTheme();

  if (verticalLayout) {
    return (
      <>
        <DashboardHeader onOpenSidebar={() => setOpen(true)} verticalLayout={verticalLayout} />

        {isDesktop ? (
          <NavbarHorizontal />
        ) : (
          <NavbarVertical isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
        )}

        <Box
          component="main"
          sx={{
            px: { lg: 2 },
            pt: {
              xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
              lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 80}px`,
            },
            pb: {
              xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
              lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT}px`,
            },
            [theme.breakpoints.down('md')]: {
              height: '100%',
            },
          }}
        >
          <Outlet />
        </Box>
      </>
    );
  }

  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        minHeight: { lg: 1 },
      }}
    >
      <DashboardHeader isCollapse={collapsed} onOpenSidebar={() => setOpen(true)} />

      <NavbarVertical
        isCollapse={collapsed}
        setIsCollapsed={setCollapsed}
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />

      <MainStyle collapsed={collapsed}>
        <Box px={{ xs: 2, md: 2, lg:2 }}>
          <Outlet />
        </Box>
      </MainStyle>
    </Box>
  );
}
