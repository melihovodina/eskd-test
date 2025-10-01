import messageModel from "../models/message.model";

export class MessageService {
  static async createMessage(name: string, phone: string, message: string) {
    try {
      await messageModel.create({ name, phone, message });
    } catch (error: any) {
      throw new Error("Failed to create message in DB: " + error.message);
    }
  }
}