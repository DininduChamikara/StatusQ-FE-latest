import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { List, Box, ListSubheader } from "@mui/material";
//
import { NavListRoot } from "./NavList";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------

export const ListSubheaderStyle = styled((props) => (
  <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.overline,
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.shorter,
  }),
}));

NavSectionVertical.propTypes = {
  isCollapse: PropTypes.bool,
  navConfig: PropTypes.array,
};

export default function NavSectionVertical({
  navConfig,
  isCollapse = false,
  ...other
}) {
  // const userInfo = useSelector((state) => state.login.userProperties);

  // const userRole = useSelector((state) => state.login.userRole.name);
  const userType = useSelector((state) => state.login.userType);

  return (
    <Box {...other}>
      {navConfig.map((group) => (
        <List key={group.subheader} disablePadding sx={{ px: 2 }}>
          {group.items.map((list) => {
            return (
              (list.authUser === userType || list.authUser === "") && (
                <NavListRoot
                  key={list.title}
                  list={list}
                  isCollapse={isCollapse}
                />
              )
            );
          })}
        </List>
      ))}
    </Box>
  );
}
