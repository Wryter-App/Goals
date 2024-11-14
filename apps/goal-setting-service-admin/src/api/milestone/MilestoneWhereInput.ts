import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GoalWhereUniqueInput } from "../goal/GoalWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type MilestoneWhereInput = {
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  goal?: GoalWhereUniqueInput;
  id?: StringFilter;
  tasks?: TaskListRelationFilter;
  title?: StringNullableFilter;
};
