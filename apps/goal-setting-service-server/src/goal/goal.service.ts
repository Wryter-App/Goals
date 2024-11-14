import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GoalServiceBase } from "./base/goal.service.base";

@Injectable()
export class GoalService extends GoalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
