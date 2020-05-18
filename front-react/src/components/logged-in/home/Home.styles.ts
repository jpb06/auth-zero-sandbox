import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  item: {
    "& span": {
      fontSize: "small",
    },
  },
  topMargin: {
    marginTop: theme.spacing(2),
  },
}));

export default styles;
