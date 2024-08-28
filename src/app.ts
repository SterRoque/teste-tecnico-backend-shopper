import fastify from "fastify";
import { routes } from "./routes";
import { ZodError } from "zod";
import cors from "@fastify/cors";

export const app = fastify();

app.register(cors, {
  origin: "*",
});

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    reply.status(400).send({
      statusCode: 400,
      error: "Bad Request",
      issues: error.issues,
    });
    return;
  }

  reply.send(error);
});

app.register(routes);
