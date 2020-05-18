import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import {
  RepoEvent as RepoEventType,
  RepoEventType as EventType,
} from "../../../../types/repo.type";
import styles from "./RepoEvent.styles";

interface RepoEventProps extends RepoEventType {}

const RepoEvent: React.FC<RepoEventProps> = ({
  date,
  type,
  user,
  description,
}) => {
  const classes = styles();

  const getType = () => {
    switch (type) {
      case EventType.Comment:
        return "Comment";
      case EventType.Commit:
        return "Commit";
      case EventType.Issue:
        return "Issue";
      case EventType.NewBranch:
        return "New branch";
      case EventType.PullRequest:
        return "Pull request";
    }
  };

  return (
    <>
      <ListItem disableGutters>
        <ListItemAvatar>
          <Avatar src={user.picture} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={<div>{`${getType()} by ${user.name}`}</div>}
          secondary={
            <>
              <span>{date}</span>
              <br />
              <span>{description}</span>
            </>
          }
          className={classes.data}
        />
      </ListItem>
    </>
  );
};

export default RepoEvent;
