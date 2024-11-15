import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AiChatService } from "./aichat.service";

@swagger.ApiTags("aiChats")
@common.Controller("aiChats")
export class AiChatController {
  constructor(protected readonly service: AiChatService) {}

  @common.Post("/chat")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ChatWithAi(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ChatWithAi(body);
      }
}
