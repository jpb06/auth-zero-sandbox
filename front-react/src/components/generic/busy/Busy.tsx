import React from "react";
import clsx from "clsx";
import LoopIcon from "@material-ui/icons/Loop";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./Busy.styles";

interface BusyProps {
  classes: any;
  text: string;
}

const Busy: React.FC<BusyProps> = ({ classes, text }) => {
  return (
    <div className={clsx(classes.root)}>
      <LoopIcon className={clsx(classes.progressIcon, classes.spinner)} />
      <br />
      {text}
    </div>
  );
};

export default withStyles(styles)(Busy);
