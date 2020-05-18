import React from "react";
import BreadCrumb from "../generic/breadcrumb/BreadCrumb";
import useUserProfileLoading from "../../../hooks/use.user.profile.loading.hook";
import Profile from "./Profile";
import styles from "../LoggedInPage.styles";

const ProfileContainer = () => {
  const classes = styles();

  const userProfile = useUserProfileLoading();

  return (
    <>
      <BreadCrumb text="Profile" />
      <div className={classes.root}>
        <Profile userProfile={userProfile} />
      </div>
    </>
  );
};

export default ProfileContainer;
