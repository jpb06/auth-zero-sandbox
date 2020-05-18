import { Repo } from "../types/repo.type";
import { RepoEventType } from "../types/repo.event.type";
import users from "./users.mock.data";

const repos: Array<Repo> = [
  {
    id: 1,
    name: "circuit-biscuits",
    events: [
      {
        date: "01/01/2020",
        type: RepoEventType.NewBranch,
        user: users[0],
        description: "Branch name: feature-424 - avatars for biscuits",
      },
      {
        date: "03/01/2020",
        type: RepoEventType.Commit,
        user: users[0],
        description: "b67s7u - factorizing avatar generation logic",
      },
      {
        date: "04/01/2020",
        type: RepoEventType.Commit,
        user: users[0],
        description: "ww0zvk - generating random avatars for biscuits",
      },
      {
        date: "07/01/2020",
        type: RepoEventType.Commit,
        user: users[1],
        description:
          "60ivou - cherry picking changes integrated from feature-228",
      },
      {
        date: "08/01/2020",
        type: RepoEventType.PullRequest,
        user: users[0],
        description:
          "Opening Pull request on feature-424 - avatars for biscuits",
      },
      {
        date: "09/01/2020",
        type: RepoEventType.Comment,
        user: users[0],
        description: "Pull request on feature-424 : No regression observed",
      },
      {
        date: "02/02/2020",
        type: RepoEventType.Issue,
        user: users[1],
        description:
          "Opening issue 40 : some biscuits have incoherent avatars in regard with their category",
      },
      {
        date: "03/02/2020",
        type: RepoEventType.Comment,
        user: users[0],
        description: "Issue 40 : Not a bug. It's a feature!",
      },
      {
        date: "03/02/2020",
        type: RepoEventType.Comment,
        user: users[1],
        description:
          "Issue 40 : It's not O.K to have a bretzel picture for pie biscuits! Imo, it's related with ww0zvk",
      },
    ],
  },
  {
    id: 2,
    name: "ultra-sail",
    events: [
      {
        date: "25/03/2020",
        type: RepoEventType.Issue,
        user: users[1],
        description:
          "Issue 2 : Viewing Sri Lanka's hotspots causes the application to crash",
      },
    ],
  },
];

export default repos;
