import { Stream } from "node:stream";

import { AppError } from "../../../../errors/AppError";
import { CreateQrUseCase } from "./createQrUseCase";

describe("CreateQrUseCase", () => {
  let createQrUseCase: CreateQrUseCase;

  beforeEach(() => {
    createQrUseCase = new CreateQrUseCase();
  });

  it("should generate a QR code for the given URL", () => {
    const url = "https://www.google.com";
    const qrCode = createQrUseCase.execute({ url });

    expect(qrCode instanceof Stream).toBeTruthy();
  });

  it("should throw an error if no URL is provided", () => {
    expect(() => {
      createQrUseCase.execute({ url: undefined });
    }).toThrowError(AppError);
  });

  it("should throw an error if an invalid URL is provided", () => {
    const invalidUrls = ["ftp://google.com", "invalid", "http://"];

    invalidUrls.forEach((url) => {
      expect(() => {
        createQrUseCase.execute({ url });
      }).toThrowError(AppError);
    });
  });
});
