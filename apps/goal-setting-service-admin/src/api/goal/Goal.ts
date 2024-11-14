import { Milestone } from "../milestone/Milestone";
import { User } from "../user/User";

export type Goal = {
  createdAt: Date;
  description: string | null;
  id: string;
  milestones?: Array<Milestone>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
