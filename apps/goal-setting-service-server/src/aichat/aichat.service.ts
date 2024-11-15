import { Injectable } from "@nestjs/common";

@Injectable()
export class AiChatService {
  constructor() {}
  async ChatWithAi(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
