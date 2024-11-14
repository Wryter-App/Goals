import { MilestoneUpdateManyWithoutGoalsInput } from "./MilestoneUpdateManyWithoutGoalsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GoalUpdateInput = {
  description?: string | null;
  milestones?: MilestoneUpdateManyWithoutGoalsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
