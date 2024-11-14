import { Module } from "@nestjs/common";
import { GoalModuleBase } from "./base/goal.module.base";
import { GoalService } from "./goal.service";
import { GoalController } from "./goal.controller";
import { GoalResolver } from "./goal.resolver";

@Module({
  imports: [GoalModuleBase],
  controllers: [GoalController],
  providers: [GoalService, GoalResolver],
  exports: [GoalService],
})
export class GoalModule {}
