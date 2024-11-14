import * as graphql from "@nestjs/graphql";
import { MilestoneResolverBase } from "./base/milestone.resolver.base";
import { Milestone } from "./base/Milestone";
import { MilestoneService } from "./milestone.service";

@graphql.Resolver(() => Milestone)
export class MilestoneResolver extends MilestoneResolverBase {
  constructor(protected readonly service: MilestoneService) {
    super(service);
  }
}
