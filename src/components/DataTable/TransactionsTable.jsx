import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 120,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "date",
    headerName: "Date",
    width: 200,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "description",
    headerName: "Description",
    type: "text",
    width: 680,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 120,
    headerAlign: "right",
    align: "right",
  },
];

const rows = [
  {
    id: 1,
    date: "23/02/2022",
    description: "Payment for AD-001-002 from CLI-002-300",
    amount: "Rs. 500.00",
  },
  {
    id: 2,
    date: "23/02/2022",
    description: "Payment for AD-001-002 from CLI-002-300",
    amount: "Rs. 500.00",
  },
  {
    id: 3,
    date: "23/02/2022",
    description: "Payment for AD-001-002 from CLI-002-300",
    amount: "Rs. 500.00",
  },
  {
    id: 4,
    date: "23/02/2022",
    description: "Payment for AD-001-002 from CLI-002-300",
    amount: "Rs. 500.00",
  },
  {
    id: 5,
    date: "23/02/2022",
    description: "Payment for AD-001-002 from CLI-002-300",
    amount: "Rs. 500.00",
  },
  {
    id: 6,
    date: "23/02/2022",
    description: "Payment for AD-001-002 from CLI-002-300",
    amount: "Rs. 500.00",
  },
  {
    id: 7,
    date: "23/02/2022",
    description: "Payment for AD-001-002 from CLI-002-300",
    amount: "Rs. 500.00",
  },
];

export default function TransactionTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
