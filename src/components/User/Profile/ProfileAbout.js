import PropTypes from "prop-types";
// @mui
import { Card, CardHeader, Link, Stack, Typography } from "@mui/material";
// components
// import Iconify from '../../../../components/Iconify';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PortraitIcon from '@mui/icons-material/Portrait';
import { useSelector } from "react-redux";

ProfileAbout.propTypes = {
  profile: PropTypes.object,
};

export default function ProfileAbout() {

  const {
    email,
    contactName,
    contactEmail,
    contactPhone,
  } = useSelector((state) => state.login);
  
  return (
    <Card>
      <CardHeader title="About You" />

      <Stack spacing={2} sx={{ p: 3 }}>

        <Stack direction="row">
          <MailOutlineIcon style={{ marginRight: "10px" }} />

          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Sign-In Email : &nbsp;
            </Link>
            {email ? email : ""}
            {/* test@gmail.com */}
          </Typography>
        </Stack>

        <Stack direction="row">
          <PortraitIcon style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Contact name : &nbsp;
            </Link>
            {contactName ? contactName : ""}
          </Typography>
        </Stack>

        <Stack direction="row">
          <AttachEmailOutlinedIcon style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Contact email : &nbsp;
            </Link>
            {contactEmail ? contactEmail : ""}
          </Typography>
        </Stack>

        <Stack direction="row">
          <PhoneOutlinedIcon style={{ marginRight: "10px" }} />

          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Contact Phone : &nbsp;
            </Link>
            {contactPhone ? contactPhone : ""}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
