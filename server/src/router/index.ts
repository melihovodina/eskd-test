import { Router } from "express";
import msgRoutes from "./message.routes";

const router = Router();

router.use("/messages", msgRoutes);

export default router;
