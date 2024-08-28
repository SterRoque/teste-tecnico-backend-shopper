import { FastifyInstance } from "fastify";
import { uploadController } from "../controllers/upload.controller";

export async function routes(app: FastifyInstance) {
  app.post("/upload", uploadController);

  app.patch("/confirm", (_, reply) => reply.status(200).send("confirm"));
}
