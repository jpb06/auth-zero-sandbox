import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import logoutAction from "../../../../redux/actions/logout.action";
import { useReduxDispatch } from "../../../../hooks/redux.hooks";

const Nav = () => {
  const classes = styles();
  const dispatch = useReduxDispatch();

  const [value, setValue] = React.useState(0);

  const handleLogoff = () => {
    dispatch(logoutAction());
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.stickToBottom}
    >
      <BottomNavigationAction
        component={Link}
        to="/home"
        label="Home"
        value="home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/timeline"
        label="Timeline"
        value="timeline"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/profile"
        label="Profile"
        value="profile"
        icon={<AccountCircleIcon />}
      />
      <BottomNavigationAction
        onClick={handleLogoff}
        label="Logoff"
        value="logoff"
        icon={<HighlightOffIcon />}
      />
    </BottomNavigation>
  );
};

export default Nav;
