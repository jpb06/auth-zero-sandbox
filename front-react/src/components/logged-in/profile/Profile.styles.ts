import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  avatar: {
    width: 90,
    height: 90,
    marginTop: 20,
    marginBottom: 10,
  },
  detailsListMargin: {
    marginTop: theme.spacing(5),
  },
  rawData: {
    whiteSpace: "pre-wrap",
    wordBreak: "break-all",
  },
}));

export default styles;
