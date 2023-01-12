import PropTypes from "prop-types";
// @mui
import { Card, CardHeader, Link, Stack, Typography } from "@mui/material";
// components
// import Iconify from '../../../../components/Iconify';
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import PortraitIcon from "@mui/icons-material/Portrait";
import { useSelector } from "react-redux";
import {
  AccountBox,
  AdminPanelSettings,
  Campaign,
  CreditScore,
  Payments,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import { useEffect } from "react";
import PromoterService from "../../../api/services/PromoterService";
import { useState } from "react";
import UserService from "../../../api/services/UserService";

// ProfileAbout.propTypes = {
//   profile: PropTypes.object,
// };

export default function UserProfileAbout({ userId }) {
  const [promoterData, setPromoterData] = useState();
  const [userData, setUserData] = useState();

  const {userType} = useSelector((state) => state.login);

  useEffect(() => {
    const response = PromoterService.getPromoterByUserId(userId);
    response.then((res) => {
      if (res.data.responseCode === "00") {
        // console.log("promoter details", res.data.promoter);
        setPromoterData(res.data.promoter);
      }
    });

    const userDataResponse = UserService.getUserByUserId(userId);
    userDataResponse.then((res) => {
      if(res.data.responseCode === "00") {
        
        setUserData(res.data.user);
      }
    })
  }, [userId]);

  return (
    <Card>
      <CardHeader title="About User" />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack direction="row">
          <MailOutlineIcon style={{ marginRight: "10px" }} />

          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Sign-In Email : &nbsp;
            </Link>
            {userData && userData.email}
          </Typography>
        </Stack>

        <Stack direction="row">
          <PortraitIcon style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Contact name : &nbsp;
            </Link>
            {userData && (userData.contactName ? userData.contactName : (userData.firstname + " " + userData.lastname))}
            {/* {userData && userData.firstname} */}
          </Typography>
        </Stack>

        <Stack direction="row">
          <AttachEmailOutlinedIcon style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Contact email : &nbsp;
            </Link>
            {userData && (userData.contactEmail ? userData.contactEmail : userData.email)}
          </Typography>
        </Stack>

        <Stack direction="row">
          <PhoneOutlinedIcon style={{ marginRight: "10px" }} />

          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Contact Phone : &nbsp;
            </Link>
            {userData && userData.contactPhone ? userData.contactPhone : "Not Provided"}
          </Typography>
        </Stack>

        {promoterData && (
          <Stack direction="row">
            <Campaign style={{ marginRight: "10px" }} />
            <Typography variant="body2">
              <Link component="span" variant="subtitle2" color="text.primary">
                Promoter ID : &nbsp;
              </Link>
              {promoterData._id}
            </Typography>
          </Stack>
        )}

        <Stack direction="row">
          <AccountBox style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Client ID : &nbsp;
            </Link>
            {userId ? userId : ""}
          </Typography>
        </Stack>

        <Stack direction="row">
          <AdminPanelSettings style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Account Status : &nbsp;
            </Link>
            {userData && (userData.accountStatus ? userData.accountStatus : "Open")}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Payments style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Balance : &nbsp;
            </Link>
            Rs. 1100.00 (still dummy)
          </Typography>
        </Stack>

        <Stack direction="row">
          <ShoppingCartCheckout style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Total expenditure for campaigns : &nbsp;
            </Link>
            Rs. 10000.00 (still dummy)
          </Typography>
        </Stack>

        <Stack direction="row">
          <CreditScore style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Total earnings form campaigns : &nbsp;
            </Link>
            Rs. 20000.00 (still dummy)
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
