import {
  Box,
  Button,
  Divider,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedPromotersList } from "../../store/reducers/saveCampaign";
import BarChart from "../BarChart/BarChart";
import DataTable from "../DataTable/DataTable";
import SelectedPromoterStatistics from "../SelectedPromoterStatistics/SelectedPromoterStatistics";

function SelectPromoters() {
  const [selectedPromoterCount, setSelectedPromoterCount] = useState(0);
  const [selectedPromotersList, setSelectedPromotersList] = useState([]);

  const dispatch = useDispatch();

  const [listSaved, setListSaved] = useState(false);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "50%", p: 1 }}>
          <DataTable
            selectedPromoterCount={selectedPromoterCount}
            setSelectedPromoterCount={setSelectedPromoterCount}
            selectedPromotersList={selectedPromotersList}
            setSelectedPromotersList={setSelectedPromotersList}
            listSaved={listSaved}
          />
        </Box>

        {/* Statistics */}
        <SelectedPromoterStatistics/>

      </Box>

      {selectedPromoterCount > 0 && (
        <Box
          sx={{
            textAlign: "center",
            my: 1,
            borderTop: 2,
            borderBottom: 2,
            py: 1,
            color: "primary",
          }}
        >
          <Button
            sx={{ ml: 1, width: 300 }}
            disabled={listSaved}
            variant="contained"
            onClick={() => {
              dispatch(
                changeSelectedPromotersList({
                  selectedPromoterIdList: selectedPromotersList,
                })
              );
              setListSaved(true)
            }}
          >
            Save Selections ({selectedPromoterCount})
          </Button>

          <Button
            sx={{ ml: 1, width: 300 }}
            variant="contained"
            color="secondary"
            onClick={() => {
              // need to clear details
              setListSaved(false)
            }}
          >
            Edit Selections
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default SelectPromoters;
