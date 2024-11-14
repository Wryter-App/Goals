import { Milestone } from "../milestone/Milestone";

export type Task = {
  createdAt: Date;
  description: string | null;
  id: string;
  milestone?: Milestone | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
