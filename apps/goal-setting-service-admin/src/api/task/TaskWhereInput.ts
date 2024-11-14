import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MilestoneWhereUniqueInput } from "../milestone/MilestoneWhereUniqueInput";

export type TaskWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  milestone?: MilestoneWhereUniqueInput;
  status?: "Option1";
  title?: StringNullableFilter;
};
