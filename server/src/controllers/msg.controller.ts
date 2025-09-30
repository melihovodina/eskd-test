import { Request, Response } from "express";
import { CreateMsgInput } from "../schemas/msg.schema";

export class MsgController {
  static createMsg(req: Request<{}, {}, CreateMsgInput>, res: Response) {
    
  }
}