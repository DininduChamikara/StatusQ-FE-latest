import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PromoterService from "../../api/services/PromoterService";
import ActionButton from "../Table/ActionButton";
import EnhancedTable from "../Table/EnhancedTable";
import SearchBar from "./SearchBar";

const HEAD_CELLS = [
  {
    id: "id",
    numeric: true,
    disablePadding: true,
    label: "No",
  },
  {
    id: "promoterId",
    numeric: false,
    disablePadding: false,
    label: "Promoter ID",
  },
  {
    id: "nameWithInit",
    numeric: false,
    disablePadding: false,
    label: "Name with init",
  },
  {
    id: "gender",
    numeric: false,
    disablePadding: false,
    label: "Gender",
  },
  {
    id: "province",
    numeric: false,
    disablePadding: false,
    label: "Province",
  },
  {
    id: "language",
    numeric: true,
    disablePadding: false,
    label: "Language",
  },
  {
    id: "state",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "Actions",
    numeric: true,
    disablePadding: false,
    label: "Actions",
    align: "center",
    sorting: false,
  },
];

function createData(
  no,
  userId,
  promoterId,
  nameWithInit,
  gender,
  province,
  language,
  state
) {
  return {
    no,
    userId,
    promoterId,
    nameWithInit,
    gender,
    province,
    language,
    state,
  };
}

function PromoterDetailsTable() {
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);

  const [numOfRows, setNumOfRows] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [searchStr, setSearchStr] = useState("");

  const viewClickHandler = (userId) => {
    navigate(`/user_view?userId=${userId}`);
  };

  const requestBody = {
    page: page,
    pageCount: rowsPerPage,
  };

  useEffect(() => {
    const response = PromoterService.getAllPromotersByPost({
      ...requestBody,
      page: page,
      pageCount: rowsPerPage,
    });
    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {
          let response = res.data.promoters;

          response = response.filter((item) => item._id.includes(searchStr) || item.nameWithInit.toLowerCase().includes(searchStr.toLowerCase()));

          setRows(
            response.map((item, index) => {
              return createData(
                index + 1 + rowsPerPage * page,
                item.userId ? item.userId : "",
                item._id ? item._id : "",
                item.nameWithInit ? item.nameWithInit : "",
                item.gender ? item.gender : "",
                item.province ? item.province : "",
                item.language ? item.language : "",
                item.state ? item.state : ""
              );
            })
          );
          setNumOfRows(res.data.total);
        }
      }
    });
  }, [searchStr, page, rowsPerPage]);

  return (
    <Box>
      <EnhancedTable
        headCells={HEAD_CELLS}
        rows={rows}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        numOfRows={numOfRows}
        hideMoreOptions
        tableTitle={"Promoter Details Report"}
        // align={'center'}
        ignoreIndex={1}
        actions={(index) => {
          return (
            <>
              <ActionButton
                text="View"
                actionClickHandler={() => viewClickHandler(index)}
              />
            </>
          );
        }}
        isToolbarVisible={true}
        searchEnable={
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Box width={300}>
              <SearchBar
                setSearchStr={setSearchStr}
                placeholder={"Search..."}
              />
            </Box>
          </Box>
        }
      />
    </Box>
  );
}

export default PromoterDetailsTable;
