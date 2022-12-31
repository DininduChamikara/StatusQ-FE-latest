import { Card, CardHeader, Link, Stack, Typography } from "@mui/material";
import React from "react";

// const IconStyle = styled(BiUser)(({ theme }) => ({
//   width: 20,
//   height: 20,
//   marginTop: 1,
//   flexShrink: 0,
//   marginRight: theme.spacing(2),
// }));

const ProfilePackage = () => {
  return (
    <Card sx={{ height: "100%", paddingBottom: 10 }}>
      <CardHeader title="Credit Account Details" />

      <Stack spacing={2} sx={{ p: 3 }}>

        <Stack direction="row">
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Total Usage: &nbsp;
            </Link>
            0
          </Typography>
        </Stack>

        <Stack direction="row">
          <Link component="span" variant="subtitle2" color="text.primary">
            Balance: &nbsp;
          </Link>
          <Typography variant="body2"> 0</Typography>
        </Stack>

       
      </Stack>
    </Card>
  );
};

export default ProfilePackage;
