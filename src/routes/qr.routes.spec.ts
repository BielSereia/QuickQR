import request from "supertest";

import { app } from "../index";

describe("CreateQrController", () => {
  it("should generate a QR code for the given URL", async () => {
    const response = await request(app)
      .get("/qr")
      .query({ url: "https://www.google.com" });

    expect(response.status).toBe(200);
  });

  it('should return "bad request" status if the URL is not provided', async () => {
    const response = await request(app).get("/qr");

    expect(response.status).toBe(400);
  });

  it('should return "bad request" message if the URL is not provided', async () => {
    const response = await request(app).get("/qr");

    expect(response.body.message).toBe("Invalid URL");
  });

  it("should set the response type to svg", async () => {
    const response = await request(app)
      .get("/qr")
      .query({ url: "https://www.google.com" });

    expect(response.type).toBe("image/svg+xml");
  });
});
