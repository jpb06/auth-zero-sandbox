import { RepoEvent } from "./repo.event.type";

export interface Repo {
  id: number;
  name: string;
  events: Array<RepoEvent>;
}
