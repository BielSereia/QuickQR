import { Router } from "express";

import { qrRouter } from "./qr.routes";

const router = Router();

router.use("/qr", qrRouter);

export { router };
