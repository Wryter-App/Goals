import { Milestone as TMilestone } from "../api/milestone/Milestone";

export const MILESTONE_TITLE_FIELD = "title";

export const MilestoneTitle = (record: TMilestone): string => {
  return record.title?.toString() || String(record.id);
};
