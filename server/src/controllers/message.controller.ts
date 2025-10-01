import { Request, Response } from "express";
import { CreateMessageInput } from "../schemas/message.schema";
import { MessageService } from "../services/message.service";

export class MessageController {
  static async createMessage(req: Request<{}, {}, CreateMessageInput>, res: Response) {
    const { name, phone, message } = req.body;
    
    try {
      await MessageService.createMessage(name, phone, message);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message || "Server error" });
    }

    res.status(201).json({ message: "Message created successfully" });
  }
}