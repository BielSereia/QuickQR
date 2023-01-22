import { Router } from "express";

import { CreateQrController } from "../modules/qr/useCases/createQr/createQrController";

const qrRouter = Router();

const createQrController = new CreateQrController();

qrRouter.get("/", createQrController.handle);

export { qrRouter };
