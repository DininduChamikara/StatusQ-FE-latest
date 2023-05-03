import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { Box, Drawer, Stack } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// config
import { NAVBAR } from '../../../config';
// components
import { NavSectionVertical } from '../../../components/nav-section';
//
import navConfig from './NavConfig';
import Scrollbar from '../../../components/Scrollbar';
import CollapseButton from './CollapseButton';

import 'simplebar-react/dist/simplebar.min.css';
import logo from '../../../assets/images/logo.png';
import palette from '../../../theme/palette';
import { Menu } from '@mui/icons-material';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.short,
    }),
  },
}));

// ----------------------------------------------------------------------

NavbarVertical.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function NavbarVertical({ isOpenSidebar, onCloseSidebar, isCollapse, setIsCollapsed }) {
  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: palette.navbars.main,
        },
        overFlowX: 'hidden',
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 4,
          px: 2.5,
          flexShrink: 0,
          ...(isCollapse && { alignItems: 'center', pt: 3, pb: 2, px: 1.5 }),
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {!isCollapse && (
            <img
              src={logo}
              alt="logo"
              width={isCollapse ? '100%' : '70%'}
              onClick={() => {
                setIsCollapsed(false);
              }}
              style={{ marginBottom: '1rem' }}
            />
          )}
          {isCollapse && (
            <Menu
              color={palette.navbars.menuIcon}
              onClick={() => {
                setIsCollapsed(false);
              }}
              sx={{color:'grey.100'}}
            />
          )}

          {isDesktop && !isCollapse && (
            <CollapseButton
              onToggleCollapse={() => {
                setIsCollapsed(true);
              }}
              collapseClick={isCollapse}
            />
          )}
        </Stack>
      </Stack>

      <NavSectionVertical navConfig={navConfig} isCollapse={isCollapse} />

      <Box sx={{ flexGrow: 1 }} />

      {/* logout */}
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: isCollapse ? NAVBAR.DASHBOARD_COLLAPSE_WIDTH : NAVBAR.DASHBOARD_WIDTH,
        },
      }}
    >
      {!isDesktop &&
        (setIsCollapsed(false),
        (
          <Drawer
            open={isOpenSidebar}
            onClose={onCloseSidebar}
            PaperProps={{
              sx: {
                width: NAVBAR.DASHBOARD_WIDTH,
                backgroundColor: palette.navbars.main,
              },
            }}
          >
            {renderContent}
          </Drawer>
        ))}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              m: 0,
              p: 0,
              width: NAVBAR.DASHBOARD_WIDTH,
              bgcolor: palette.navbars.main,
              transition: (theme) =>
                theme.transitions.create('width', {
                  duration: theme.transitions.duration.short,
                }),
              ...(isCollapse && {
                width: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
              }),
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
