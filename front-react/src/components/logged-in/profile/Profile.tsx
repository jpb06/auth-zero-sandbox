import React from "react";
import { UserProfile } from "../../../types/user.profile";
import Busy from "../../generic/busy/Busy";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import styles from "./Profile.styles";

interface ProfileProps {
  userProfile: UserProfile | null;
}

const Profile: React.FC<ProfileProps> = ({ userProfile }) => {
  const classes = styles();

  if (!userProfile) return <Busy text="Retrieving your profile" />;

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Avatar src={userProfile.picture} className={classes.avatar} />
        <div>{userProfile.name}</div>
      </Grid>
      <Divider className={classes.detailsListMargin} />
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Email" secondary={userProfile.email} />
        </ListItem>
      </List>
      {/* <pre className={classes.rawData}>{userProfile.raw}</pre> */}
    </>
  );
};

export default Profile;
