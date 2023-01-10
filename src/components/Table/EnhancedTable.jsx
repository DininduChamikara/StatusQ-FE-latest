import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableRow from "./EnhancedTableRow";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const EnhancedTableToolbar = (props) => {
  return props.isToolbarVisible ? (
    <Toolbar sx={{ mt: 0, pt: 0 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        width={"100%"}
        marginBottom={0}
      >
        <Typography
          fontSize={20}
          fontWeight={"bold"}
          color={"grey.700"}
          textAlign={"center"}
          lineHeight={2}
        >
          {props.tableTitle}
        </Typography>
        {props.optionalButton ? props.optionalButton : ""}
        {props.searchEnable ? props.searchEnable : ""}
      </Box>
    </Toolbar>
  ) : (
    <></>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable({
  headCells,
  page,
  setPage,
  rows,
  rowsPerPage,
  setRowsPerPage,
  numOfRows,
  tableTitle,
  actionButtons,
  optionalButton,
  searchEnable,
  isToolbarVisible,
  ignoreIndex,
  align,
  colspan = {
    row: "",
    count: 0
  },
  actions = null,
  hideMoreOptions = false
}) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const [dense, setDense] = React.useState(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows = 1 > 0 ? Math.max(0, rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, pt: 1 }}>
        <EnhancedTableToolbar
          tableTitle={tableTitle}
          optionalButton={optionalButton}
          isToolbarVisible={isToolbarVisible}
          searchEnable={searchEnable}
        />
        <TableContainer
          // Reason is for avoid height jump
          sx={{ position: 'relative' }}
        >
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              headCells={headCells}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).map(
                (row, index) => (
                  <EnhancedTableRow
                    index={index}
                    key={index}
                    data={Object.values(row)}
                    actionButtons={actionButtons}
                    align={align}
                    actions={(index) => actions(index)}
                    hideMoreOptions={hideMoreOptions}
                    ignoreIndex={ignoreIndex}
                  />
                )
              )}

            </TableBody>
          </Table>

          {numOfRows === 0 && (
            // <TableRow>
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ textAlign: "center" }}>
                No Data Found!
              </Typography>
            </Box>
            // </TableRow>

          )}
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={numOfRows}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
