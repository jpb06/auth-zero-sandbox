import React from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "./Alert";

export enum SnackbarType {
  success = "success",
  error = "error",
  warning = "warning",
  info = "info",
}

export interface CustomSnackbarData {
  isOpen: boolean;
  type: SnackbarType;
  text: string;
}

interface CustomSnackbarProps extends CustomSnackbarData {
  onClose: () => void;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  isOpen,
  type,
  text,
  onClose,
}) => {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={onClose} severity={type}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
