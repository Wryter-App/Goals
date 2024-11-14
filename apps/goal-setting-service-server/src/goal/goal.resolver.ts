import * as graphql from "@nestjs/graphql";
import { GoalResolverBase } from "./base/goal.resolver.base";
import { Goal } from "./base/Goal";
import { GoalService } from "./goal.service";

@graphql.Resolver(() => Goal)
export class GoalResolver extends GoalResolverBase {
  constructor(protected readonly service: GoalService) {
    super(service);
  }
}
