import { createStyles, Theme } from "@material-ui/core";

const styles = createStyles((theme: Theme) => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing(9),
    marginBottom: 30,
    color: theme.palette.primary.main,
  },
  progressIcon: {
    height: 70,
    width: 70,
  },
  spinner: {
    animationName: "$spin",
    animationDuration: "4000ms",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  },
  "@keyframes spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
}));

export default styles;
