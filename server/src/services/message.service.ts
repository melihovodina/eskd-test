import msgModel from "../models/message.model";

export class MessageService {
  static async createMsg(name: string, phone: string, message: string) {
    try {
      await msgModel.create({ name, phone, message });
    } catch (error: any) {
      throw new Error("Failed to create message in DB: " + error.message);
    }
  }
}