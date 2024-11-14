import { MilestoneWhereUniqueInput } from "../milestone/MilestoneWhereUniqueInput";

export type TaskCreateInput = {
  description?: string | null;
  milestone?: MilestoneWhereUniqueInput | null;
  status?: "Option1" | null;
  title?: string | null;
};
