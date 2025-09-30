import { validateSchema } from './../middlewares/validateSchema';
import { Router } from "express";
import { MessageController } from "../controllers/message.controller";
import { createMessageSchema } from '../schemas/message.schema';

const router = Router();

router.post("/", validateSchema(createMessageSchema), MessageController.createMsg);

export default router;
