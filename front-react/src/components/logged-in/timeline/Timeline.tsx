import React from "react";
import BreadCrumb from "../generic/breadcrumb/BreadCrumb";
import styles from "../LoggedInPage.styles";
import RepoComponent from "./repo/Repo";
import useTimelineLoading from "../../../hooks/use.timeline.loading.hook";
import Busy from "../../generic/busy/Busy";

const Timeline = () => {
  const classes = styles();
  const timeline = useTimelineLoading();

  return (
    <>
      <BreadCrumb text="Timeline" />
      <div className={classes.root}>
        {timeline.length === 0 ? (
          <Busy text="Loading your timeline" />
        ) : (
          timeline.map((repo) => <RepoComponent key={repo.id} repo={repo} />)
        )}
      </div>
    </>
  );
};

export default Timeline;
