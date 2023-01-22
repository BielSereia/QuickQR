import { Request, Response } from "express";

import { CreateQrUseCase } from "./createQrUseCase";

class CreateQrController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { url } = request.query;

    const newUrl = url?.toString();

    const generatedQr = new CreateQrUseCase().execute({ url: newUrl });

    response.type("svg");

    return generatedQr.pipe(response);
  }
}

export { CreateQrController };
