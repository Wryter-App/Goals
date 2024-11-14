import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GoalService } from "./goal.service";
import { GoalControllerBase } from "./base/goal.controller.base";

@swagger.ApiTags("goals")
@common.Controller("goals")
export class GoalController extends GoalControllerBase {
  constructor(protected readonly service: GoalService) {
    super(service);
  }
}
