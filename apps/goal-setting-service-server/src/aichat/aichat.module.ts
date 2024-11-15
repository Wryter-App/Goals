import { Module } from "@nestjs/common";
import { AiChatService } from "./aichat.service";
import { AiChatController } from "./aichat.controller";
import { AiChatResolver } from "./aichat.resolver";

@Module({
  controllers: [AiChatController],
  providers: [AiChatService, AiChatResolver],
  exports: [AiChatService],
})
export class AiChatModule {}
