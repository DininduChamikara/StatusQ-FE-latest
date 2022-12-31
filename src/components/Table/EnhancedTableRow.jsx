import { Box, MenuItem, TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";
import Iconify from "../Iconify";
import TableMoreMenu from "../TableMoreMenu";
import ActionButton from "./ActionButton";

function EnhancedTableRow({
  index,
  data = [],
  actionButtons = [],
  align = "left",
  actionSpan = 0,
  actions = null,
  hideMoreOptions = false,
  ignoreIndex = undefined
}) {

  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
      {data.map((item, id) => {


        if (ignoreIndex) {

          if (id !== ignoreIndex)

            return (
              <TableCell padding="none" sx={{
                "&.MuiTableCell-paddingNone": {
                  padding: '.1rem 1rem'
                }
              }} component="td" key={id} scope="row" align={align}>
                {item}
              </TableCell>
            );
        } else

          return (
            <TableCell padding="none" sx={{
              "&.MuiTableCell-paddingNone": {
                padding: '.1rem 1rem'
              }
            }} component="td" key={id} scope="row" align={align}>
              {item}
            </TableCell>
          );

      })}
      {/* render buttons if defined */}
      {(actionButtons.length > 0 || actions) && (
        <TableCell padding="none" sx={{
          "&.MuiTableCell-paddingNone": {
            padding: '.1rem 1rem'
          }
        }} colSpan={actionSpan} component="td" scope="row" align="center">
          {actionButtons.map((action, id) => {
            return (
              <ActionButton
                key={id}
                actionClickHandler={() => action.actionFunc(data[1])}
                text={action.btnName}
                icon={action.btnIcon}
              />
            );
          })}

          <Box display="flex" alignItems="center" justifyContent="center">
            {actions(data[1])}

            {/* FIXME: Breaking Change Hardcoding the index */}

            {!hideMoreOptions && (
              <TableMoreMenu
                open={openMenu}
                onOpen={handleOpenMenu}
                onClose={handleCloseMenu}
                actions={
                  <>
                    <MenuItem
                      onClick={() => {
                        // onDeleteRow();
                        handleCloseMenu();
                      }}
                      sx={{ color: 'error.main' }}
                    >
                      <Iconify icon={'eva:trash-2-outline'} />
                      Delete
                    </MenuItem>

                    <MenuItem
                      onClick={() => {
                        // onViewRow();
                        handleCloseMenu();
                      }}
                    >
                      <Iconify icon={'eva:eye-fill'} />
                      View
                    </MenuItem>

                    <MenuItem
                      onClick={() => {
                        // onEditRow();
                        handleCloseMenu();
                      }}
                    >
                      <Iconify icon={'eva:edit-fill'} />
                      Edit
                    </MenuItem>
                  </>
                }
              />
            )}

          </Box>



        </TableCell>

      )}

      {/* <TableCell align="right" >
        <Box sx={{ position: "relative" }}>
          <TableMoreMenu
            open={openPopOver}
            onOpen={() => setOpenPopOver(true)}
            onClose={() => setOpenPopOver(false)}
            actions={
              <>
                <MenuItem
                  onClick={() => {
                    // onDeleteRow();
                    setOpenPopOver(false)
                  }}
                  sx={{ color: 'error.main' }}
                >
                  <Iconify icon={'eva:trash-2-outline'} />
                  Delete
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    // onViewRow();
                    setOpenPopOver(false)
                  }}
                >
                  <Iconify icon={'eva:eye-fill'} />
                  View
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    // onEditRow();
                    setOpenPopOver(false)
                  }}
                >
                  <Iconify icon={'eva:edit-fill'} />
                  Edit
                </MenuItem>
              </>
            }
          />
        </Box>

      </TableCell> */}
    </TableRow>
  );
}

export default EnhancedTableRow;
