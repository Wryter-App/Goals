import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MilestoneListRelationFilter } from "../milestone/MilestoneListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GoalWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  milestones?: MilestoneListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
