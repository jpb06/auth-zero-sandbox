import React from "react";
import BreadCrumb from "../generic/breadcrumb/BreadCrumb";
import styles from "../LoggedInPage.styles";
import RepoComponent from "./repo/Repo";
import useTimelineLoading from "../../../hooks/use.timeline.loading.hook";
import Busy from "../../generic/busy/Busy";
import { useReduxSelector } from "../../../hooks/redux.hooks";
import { AppStatus } from "../../../redux/store/root.state";

const Timeline = () => {
  const classes = styles();
  const timeline = useTimelineLoading();
  const isReady = useReduxSelector(
    (state) => state.appStatus === AppStatus.Available
  );

  return (
    <>
      <BreadCrumb text="Timeline" />
      <div className={classes.root}>
        {timeline.length === 0 ? (
          isReady ? (
            <div>
              Ooops! Looks like we weren't able to retrieve your timeline.
            </div>
          ) : (
            <Busy text="Loading your timeline" />
          )
        ) : (
          timeline.map((repo) => <RepoComponent key={repo.id} repo={repo} />)
        )}
      </div>
    </>
  );
};

export default Timeline;
