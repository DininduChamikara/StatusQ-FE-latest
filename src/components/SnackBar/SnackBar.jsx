import React from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { store } from "../../store/store";
import { useState } from "react";
import { showAlert } from "../../store/reducers/alert.slice";

function SnackBarAlert() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(store.getState().newAlert.isVisible);

  const severity = store.getState().newAlert.severity;
  const message = store.getState().newAlert.message;

  //subscribe for store, so that it knows when state changed
  store.subscribe(render);

  //the subscribe function calls this once the store state changed.
  //sets the state updated in the new alert store.
  function render() {
    setTimeout(() => {
      setOpen(store.getState().newAlert.isVisible);
    }, 100);
  }

  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  useEffect(() => {
    if (severity) {
      if (severity.length > 0) {
        handleClickVariant(severity);

        dispatch(
          showAlert({
            message: "",
            isVisible: false,
            severity: "",
          })
        );
      }
    }
  }, [open]);
}

export default function SnackBar() {
  return (
    <SnackbarProvider maxSnack={3}>
      <SnackBarAlert />
    </SnackbarProvider>
  );
}
