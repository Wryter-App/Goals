import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";
import { TaskCreateNestedManyWithoutMilestonesInput } from "./TaskCreateNestedManyWithoutMilestonesInput";

export type MilestoneCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  goal?: GoalWhereUniqueInput | null;
  tasks?: TaskCreateNestedManyWithoutMilestonesInput;
  title?: string | null;
};
