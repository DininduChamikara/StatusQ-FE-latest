// @mui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  Table,
  Avatar,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  Typography,
  TableContainer,
  Button,
} from "@mui/material";
// utils
import { fCurrency } from "../../utils/formatNumber";
// _mock_
// components
// import Label from '../../../../components/Label';
import Scrollbar from "../Scrollbar";
import { useEffect, useState } from "react";
import UserService from "../../api/services/UserService";
// import Scrollbar from '../../../../components/Scrollbar';

// ----------------------------------------------------------------------

// const users = [...Array(5)].map((_, index) => ({
//   userId: "63993e8a2dadf6da205ca989",
//   firstname: "Dinindu",
//   lastname: "Chamikara",
//   email: "test2@gmail.com",
//   userType: "NORMAL_USER",
//   state: "ACTIVE",
//   accountStatus: "Open",
//   imgUrl: "vsfvfvdfdfbdfdfdfbdfbdfbdfbdfb",
//   accountHolderName: "THELGE DININDU PEIRIS",
//   accountNumber: "276200150017825",
//   bankName: "HNB",
//   branchCode: "276",
//   branchName: "Katunayake",
//   contactEmail: "Chamika@gmail.cpm",
//   contactName: "Dinindu",
//   contactPhone: "0775988086",
// }));

export default function UserDetailsTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const response = UserService.getAllUsers();
    response.then((res) => {
      if (res) {
        // console.log(res);
        // setUsers(res.data);
        if (res.data.responseCode === "00") {
          console.log(res.data.users);
          setUsers(res.data.users);
        }
      }
    });
    // let res = response.data;
  }, []);

  return (
    <Card>
      <CardHeader title="User Details" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>User ID</TableCell>
                <TableCell>Contact No</TableCell>
                <TableCell align="center">Account Status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar alt={row.name} src={row.imgUrl} />
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="subtitle2">
                          {" "}
                          {row.firstname + " " + row.lastname}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {row.contactEmail}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{row._id}</TableCell>
                  <TableCell>{row.contactPhone}</TableCell>
                  <TableCell align="center">{row.accountStatus}</TableCell>
                  <TableCell align="center">
                    <Button variant="text">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>
    </Card>
  );
}
