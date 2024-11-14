import { Goal } from "../goal/Goal";
import { Task } from "../task/Task";

export type Milestone = {
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  goal?: Goal | null;
  id: string;
  tasks?: Array<Task>;
  title: string | null;
  updatedAt: Date;
};
