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
import { useNavigate } from "react-router-dom";
// import Scrollbar from '../../../../components/Scrollbar';

// ----------------------------------------------------------------------

export default function AdminDetailsTable() {

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const response = UserService.getAllUsers();
    response.then((res) => {
      if (res) {
        // console.log(res);
        // setUsers(res.data);
        if (res.data.responseCode === "00") {
          const filteredNormalUsers = res.data.users.filter(user => user.userType === "ADMIN_USER")
          // setUsers(res.data.users);
          setUsers(filteredNormalUsers);
        }
      }
    });
    // let res = response.data;
  }, []);

  const viewClickHandler = (userId) => {
    navigate(`/user_view?userId=${userId}`);
  };

  return (
    <Card>
      <CardHeader title="Admins Report" sx={{ mb: 3 }} />
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
                          {row.contactEmail ? row.contactEmail : row.email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{row._id}</TableCell>
                  <TableCell>{row.contactPhone ? row.contactPhone : "Not Provided"}</TableCell>
                  <TableCell align="center">{row.accountStatus ? row.accountStatus : "Open"}</TableCell>
                  <TableCell align="center">
                    <Button onClick={() => {
                      viewClickHandler(row._id)
                    }} variant="text">View</Button>
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
