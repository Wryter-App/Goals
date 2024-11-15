import * as graphql from "@nestjs/graphql";
import { AiChatService } from "./aichat.service";

export class AiChatResolver {
  constructor(protected readonly service: AiChatService) {}

  @graphql.Mutation(() => String)
  async ChatWithAi(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.ChatWithAi(args);
  }
}
