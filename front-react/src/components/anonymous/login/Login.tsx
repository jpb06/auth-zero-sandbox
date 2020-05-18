import React from "react";
import AuthLogic from "../../../logic/auth.logic";
import {
  Grid,
  CardContent,
  CardMedia,
  Card,
  CardActions,
  IconButton,
  Button,
} from "@material-ui/core";
import styles from "./Login.styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

interface LoginProps {
  onTestPrivateApiCall: () => void;
}

const Login: React.FC<LoginProps> = ({ onTestPrivateApiCall }) => {
  const classes = styles();

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.root}
      >
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/static/images/joke.jpg"
            title="Agile"
          />
          <CardContent>
            <Grid container justify="center" direction="row">
              <Grid item className={classes.logo}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <VerifiedUserIcon className={classes.brandIcon} />
                  Auth0 Sandbox
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.actions}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <IconButton
                aria-label="begin"
                color="primary"
                onClick={AuthLogic.login}
              >
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid>
                    <AccountCircleIcon className={classes.button} />
                  </Grid>
                  Login
                </Grid>
              </IconButton>
              <MoreHorizIcon className={classes.divider} />
              <Button
                variant="outlined"
                color="primary"
                onClick={onTestPrivateApiCall}
              >
                Attempt a restricted API call
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Login;
