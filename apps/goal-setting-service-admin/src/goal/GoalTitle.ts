import { Goal as TGoal } from "../api/goal/Goal";

export const GOAL_TITLE_FIELD = "title";

export const GoalTitle = (record: TGoal): string => {
  return record.title?.toString() || String(record.id);
};
