import { makeStyles, fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: 'url("/static/images/background/background5.gif")',
    backgroundSize: "cover",
  },
  card: {
    width: "100%",
    maxWidth: 350,
    paddingBottom: theme.spacing(2),
    backgroundColor: fade(theme.palette.background.default, 0.83),
  },
  media: {
    height: 110,
  },
  actions: {
    paddingTop: 0,
    justifyContent: "center",
  },
  logo: {
    color: "white",
    fontSize: "x-large",
    alignSelf: "center",
  },
  brandIcon: {
    marginRight: 5,
  },
  button: {
    fontSize: 90,
  },
  divider: {
    marginBottom: 12,
  },
}));

export default useStyles;
