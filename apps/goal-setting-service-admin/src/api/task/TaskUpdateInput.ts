import { MilestoneWhereUniqueInput } from "../milestone/MilestoneWhereUniqueInput";

export type TaskUpdateInput = {
  description?: string | null;
  milestone?: MilestoneWhereUniqueInput | null;
  status?: "Option1" | null;
  title?: string | null;
};
