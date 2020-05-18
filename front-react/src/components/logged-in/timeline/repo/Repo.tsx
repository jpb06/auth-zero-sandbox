import React from "react";
import { List, Typography, Divider } from "@material-ui/core";
import { Repo as RepoType } from "./../../../../types/repo.type";
import RepoEvent from "./RepoEvent";

interface RepoProps {
  repo: RepoType;
}

const Repo: React.FC<RepoProps> = ({ repo }) => {
  return (
    <>
      <Typography color="primary" gutterBottom={false} variant={"h5"}>
        {repo.name}
      </Typography>
      <Divider />
      <List>
        {repo.events.map((event, index) => (
          <RepoEvent key={index} {...event} />
        ))}
      </List>
    </>
  );
};

export default Repo;
