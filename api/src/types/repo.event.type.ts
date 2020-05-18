import { User } from "./user.type";

export enum RepoEventType {
  Commit,
  NewBranch,
  PullRequest,
  Issue,
  Comment,
}

export interface RepoEvent {
  date: string;
  type: RepoEventType;
  user: User;
  description: string;
}
