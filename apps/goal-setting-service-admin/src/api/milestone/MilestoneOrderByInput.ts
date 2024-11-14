import { SortOrder } from "../../util/SortOrder";

export type MilestoneOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  goalId?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
