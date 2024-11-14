import { MilestoneCreateNestedManyWithoutGoalsInput } from "./MilestoneCreateNestedManyWithoutGoalsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GoalCreateInput = {
  description?: string | null;
  milestones?: MilestoneCreateNestedManyWithoutGoalsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
