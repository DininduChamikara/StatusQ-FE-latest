import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSelectedPromotersList } from "../../store/reducers/saveCampaign";
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
          display: { xs: "block", lg: "flex" },
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: { xs: "100%", lg: "50%" }, p: 1 }}>
          <DataTable
            selectedPromoterCount={selectedPromoterCount}
            setSelectedPromoterCount={setSelectedPromoterCount}
            selectedPromotersList={selectedPromotersList}
            setSelectedPromotersList={setSelectedPromotersList}
            listSaved={listSaved}
          />
        </Box>

        {/* Statistics */}
        <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
          <SelectedPromoterStatistics />
        </Box>
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
              setListSaved(true);
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
              setListSaved(false);
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
