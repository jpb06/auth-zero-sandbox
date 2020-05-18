import React from "react";
import { Breadcrumbs, Typography, AppBar, Toolbar } from "@material-ui/core";
import styles from "./BreadCrumb.styles";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

interface BreadCrumbProps {
  text: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ text }) => {
  const classes = styles();

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <VerifiedUserIcon className={classes.icon} />
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="primary">Auth0 sandbox</Typography>
          <Typography color="primary">{text}</Typography>
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  );
};

export default BreadCrumb;
