import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  CheckCircleOutline,
  Close,
  PeopleAlt,
  PeopleAltOutlined,
} from "@mui/icons-material";
import { Button, Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  changeSelectedPromoterForView,
  changeSelectedPromotersList,
} from "../../store/reducers/saveCampaign";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function createData(id, promoterId) {
  return {
    id,
    promoterId,
  };
}

export default function DataTable({
  selectedPromoterCount,
  setSelectedPromoterCount,
  selectedPromotersList,
  setSelectedPromotersList,
  listSaved,
}) {
  const dispatch = useDispatch();

  const handleOnClickAction = (event, cellValues) => {
    if (event.target.checked) {
      if (selectedPromotersList.indexOf(cellValues.row.promoterId) === -1) {
        selectedPromotersList.push(cellValues.row.promoterId);
        setSelectedPromoterCount(selectedPromoterCount + 1);
        // setSelectedPromotersList(selectedPromotersList)
      }
    } else {
      setSelectedPromotersList(
        selectedPromotersList.filter(
          (promoterId) => promoterId !== cellValues.row.promoterId
        )
      );
      setSelectedPromoterCount(selectedPromoterCount - 1);
    }
  };


  const columns = [
    {
      field: "id",
      headerName: "No",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "promoterId",
      headerName: "Promoter ID",
      type: "number",
      width: 192,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Action",
      width: 220,
      headerAlign: "center",
      align: "center",
      renderCell: (cellValues) => {
        return (
          <Checkbox
            {...label}
            color={"secondary"}
            disabled={listSaved}
            icon={<PeopleAltOutlined />}
            checkedIcon={<CheckCircleOutline />}
            onClick={(event) => {
              handleOnClickAction(event, cellValues);
            }}
          />
        );
      },
    },
  ];

  const { promoterListResponse } = useSelector((state) => state.saveCampaign);
  const [rows, setRows] = useState([]);

  const [selectedPromoter, setSelectedPromoter] = useState();

  React.useEffect(() => {
    // console.log(promoterListResponse);
    if (promoterListResponse) {
      setRows(
        promoterListResponse.promoterListFinalResponseItemDTO.map(
          (promoter, index) => {
            console.log("promoter is ", promoter.promoter);
            return createData(index + 1, promoter.promoter._id);
          }
        )
      );
      dispatch(
        changeSelectedPromoterForView({
          // selectedPromoterForView: event.row.promoterId,
          selectedPromoterForView: promoterListResponse.promoterListFinalResponseItemDTO[0],
        })
      );
    }

  }, [promoterListResponse]);

  

  React.useEffect(() => {
    // console.log("first promoter is ", promoterListResponse.promoterListFinalResponseItemDTO[0])
    if(promoterListResponse){
      setSelectedPromoter(promoterListResponse.promoterListFinalResponseItemDTO[0])
    }
  }, [promoterListResponse])

  const [selecedTableRow, setSelectedTableRow] = useState(1);

  // console.log(rows);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        selectionModel={selecedTableRow}

        // checkboxSelection
        // disableSelectionOnClick
        onRowClick={(event) => {
          let selectedPromo = promoterListResponse.promoterListFinalResponseItemDTO.filter(promoter => promoter.promoter._id === event.row.promoterId);
          setSelectedPromoter(selectedPromo);
          dispatch(
            changeSelectedPromoterForView({
              selectedPromoterForView: selectedPromo[0],
            })
          );
          setSelectedTableRow(event.row.id);
        }}
      />
    </div>
  );
}
