import qr from "qr-image";

import { AppError } from "../../../../errors/AppError";
import { urlRegex } from "../../../../utils/urlRegex";

interface IRequest {
  url: string | undefined;
}

class CreateQrUseCase {
  execute({ url }: IRequest): NodeJS.ReadableStream {
    if (!url) {
      throw new AppError("Invalid URL", 400);
    }

    if (!urlRegex.test(url)) {
      throw new AppError("Invalid URL", 400);
    }

    const generatedQr = qr.image(url, { type: "svg" });

    return generatedQr;
  }
}

export { CreateQrUseCase };
