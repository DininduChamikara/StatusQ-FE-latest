// @mui
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
// utils
// _mock_
// components
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../api/services/UserService";
import Scrollbar from "../Scrollbar";

// ----------------------------------------------------------------------

export default function UserDetailsTable() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const viewClickHandler = (userId) => {
    navigate(`/user_view?userId=${userId}`);
  };

  useEffect(() => {
    const response = UserService.getAllUsers();
    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {
          const filteredNormalUsers = res.data.users.filter(
            (user) => user.userType === "NORMAL_USER"
          );
          setUsers(filteredNormalUsers);
        }
      }
    });
  }, []);

  return (
    <Card>
      <CardHeader title="Users Report" sx={{ mb: 3 }} />
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
                  <TableCell>
                    {row.contactPhone ? row.contactPhone : "Not Provided"}
                  </TableCell>
                  <TableCell align="center">
                    {row.accountStatus ? row.accountStatus : "Open"}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => {
                        viewClickHandler(row._id);
                      }}
                      variant="text"
                    >
                      View
                    </Button>
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
