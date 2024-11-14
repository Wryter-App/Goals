import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";
import { TaskUpdateManyWithoutMilestonesInput } from "./TaskUpdateManyWithoutMilestonesInput";

export type MilestoneUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  goal?: GoalWhereUniqueInput | null;
  tasks?: TaskUpdateManyWithoutMilestonesInput;
  title?: string | null;
};
