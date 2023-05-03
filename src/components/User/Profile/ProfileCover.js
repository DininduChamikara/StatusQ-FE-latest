import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import cssStyles from "../../../utils/cssStyles";
import MyAvatar from "./MyAvatar";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  "&:before": {
    ...cssStyles().bgBlur({ blur: 2, color: theme.palette.primary.darker }),
    top: 0,
    zIndex: 9,
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: theme.palette.primary.darker,
  },
}));

const InfoStyle = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  zIndex: 99,
  position: "absolute",
  marginTop: theme.spacing(5),
  [theme.breakpoints.up("md")]: {
    right: "auto",
    display: "flex",
    alignItems: "center",
    left: theme.spacing(3),
    bottom: theme.spacing(3),
  },
}));

// ----------------------------------------------------------------------

ProfileCover.propTypes = {
  myProfile: PropTypes.object,
};

export default function ProfileCover({ contactName, firstName, lastName, imgUrl }) {

  return (
    <RootStyle>
      <InfoStyle>
        <MyAvatar
          imgUrl={imgUrl}
          sx={{
            mx: "auto",
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "common.white",
            width: { xs: 80, md: 128 },
            height: { xs: 80, md: 128 },
          }}
        />

        <Box
          sx={{
            ml: { md: 3 },
            mt: { xs: 1, md: 0 },
            color: "common.white",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h4">{contactName ? contactName : (firstName + " " + lastName)}</Typography>
        </Box>
      </InfoStyle>
    </RootStyle>
  );
}
