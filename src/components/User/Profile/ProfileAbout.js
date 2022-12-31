import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { Link, Card, Typography, CardHeader, Stack, Icon } from "@mui/material";
// components
// import Iconify from '../../../../components/Iconify';
import PublicIcon from "@mui/icons-material/Public";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

import BusinessIcon from "@mui/icons-material/Business";
import { useState } from "react";
import { useEffect } from "react";

// ----------------------------------------------------------------------

const IconStyle = styled(Icon)(({ theme }) => ({
  width: 20,
  // height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
}));

// ----------------------------------------------------------------------

ProfileAbout.propTypes = {
  profile: PropTypes.object,
};

export default function ProfileAbout() {
  // const { email, country, companyName, mobileNo } = profile;
  const [countryName, setCountryName] = useState();

  useEffect(() => {
    // setCountryName(profile.country);
    setCountryName("Country Name");
  }, []);

  return (
    <Card>
      <CardHeader title="About" />

      <Stack spacing={2} sx={{ p: 3 }}>
        {/* <Typography variant="body2">{quote}</Typography> */}

        <Stack direction="row">
          <MailOutlineIcon style={{ marginRight: "10px" }} />

          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Email : &nbsp;
            </Link>
            {/* {email} */}
            test@gmail.com
          </Typography>
        </Stack>

        <Stack direction="row">
          <PublicIcon style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Lives at : &nbsp;
            </Link>
            {/* {country} */}
            Sri Lanka
          </Typography>
        </Stack>

        <Stack direction="row">
          <BusinessIcon style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Company : &nbsp;
            </Link>
            {/* {companyName} */}
            conpany name here
          </Typography>
        </Stack>

        <Stack direction="row">
          <PhoneIcon style={{ marginRight: "10px" }} />

          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Contact Number : &nbsp;
            </Link>
            {/* {mobileNo} */}
            07788994252
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
