import { Router } from "express";
import msgRoutes from "./msg.routes";

const router = Router();

router.use("/messages", msgRoutes);

export default router;
