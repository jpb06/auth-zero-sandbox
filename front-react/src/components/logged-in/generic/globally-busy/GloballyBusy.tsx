import React from "react";
import SecurityIcon from "@material-ui/icons/Security";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import styles from "./GloballyBusy.styles";

interface GloballyBusyProps {
  text: string;
}

const GloballyBusy: React.FC<GloballyBusyProps> = ({ text }) => {
  const classes = styles();

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <SecurityIcon className={classes.icon} />
      <CircularProgress style={{ width: 150, height: 150, marginTop: -125 }} />
      <Typography variant="h5" color="primary">
        Auth0 sandbox
      </Typography>
      <span>{text}</span>
    </Grid>
  );
};

export default GloballyBusy;
