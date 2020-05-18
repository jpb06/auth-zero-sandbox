import React from "react";
import BreadCrumb from "../generic/breadcrumb/BreadCrumb";
import styles from "./Home.styles";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  ListItemIcon,
  ListSubheader,
  LinearProgress,
} from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import TranslateIcon from "@material-ui/icons/Translate";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import WebIcon from "@material-ui/icons/Web";
import CachedIcon from "@material-ui/icons/Cached";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/redux.hooks";
import restrictedCallAction, {
  ApiRestriction,
} from "../../../redux/actions/restricted.call.action";
import BlockIcon from "@material-ui/icons/Block";
import CancelIcon from "@material-ui/icons/Cancel";
import { AppStatus } from "../../../redux/store/root.state";

const Home = () => {
  const classes = styles();
  const dispatch = useReduxDispatch();
  const isBusy = useReduxSelector(
    (state) => state.appStatus !== AppStatus.Available
  );

  const handleScopeRestrictedCall = () =>
    dispatch(restrictedCallAction(ApiRestriction.Scope));
  const handleRoleRestrictedCall = () =>
    dispatch(restrictedCallAction(ApiRestriction.Role));

  return (
    <>
      <BreadCrumb text="Home" />
      {isBusy && <LinearProgress />}
      <div className={classes.root}>
        The purpose of this app is to experiment with OpenID and OAuth using
        Auth0.
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SettingsApplicationsIcon color="secondary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Library"
              secondary="react"
              className={classes.item}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BuildIcon color="secondary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Boilerplate / Bootstrapper"
              secondary="Create react app"
              className={classes.item}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <TranslateIcon color="secondary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Language / Superset"
              secondary="Typescript"
              className={classes.item}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WebIcon color="secondary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="UI Framework"
              secondary="Material UI (material design)"
              className={classes.item}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CachedIcon color="secondary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="State container"
              secondary="Redux"
              className={classes.item}
            />
          </ListItem>
        </List>
        <List
          component="nav"
          subheader={
            <ListSubheader component="div">
              Restricted API calls demo
            </ListSubheader>
          }
        >
          <ListItem button onClick={handleScopeRestrictedCall}>
            <ListItemIcon>
              <BlockIcon />
            </ListItemIcon>
            <ListItemText primary="Scope guard" />
          </ListItem>
          <Divider />
          <ListItem button onClick={handleRoleRestrictedCall}>
            <ListItemIcon>
              <CancelIcon />
            </ListItemIcon>
            <ListItemText primary="Role guard" />
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default Home;
