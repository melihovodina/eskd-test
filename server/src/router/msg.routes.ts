import { validateSchema } from './../middlewares/validateSchema';
import { Router } from "express";
import { MsgController } from "../controllers/msg.controller";
import { createMsgSchema } from '../schemas/msg.schema';

const router = Router();

router.post("/", validateSchema(createMsgSchema), MsgController.createMsg);

export default router;
