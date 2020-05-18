export enum RepoEventType {
  Commit,
  NewBranch,
  PullRequest,
  Issue,
  Comment,
}

export interface User {
  id: number;
  name: string;
  picture: string;
}

export interface RepoEvent {
  date: Date;
  type: RepoEventType;
  user: User;
  description: string;
}

export interface Repo {
  id: number;
  name: string;
  events: Array<RepoEvent>;
}
