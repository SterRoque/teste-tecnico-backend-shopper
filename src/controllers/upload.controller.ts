import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function uploadController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const base64Regex =
    /^(?:[A-Za-z0-9+\/]{4})*?(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;

  const schema = z.object({
    base64: z.string().regex(base64Regex, {
      message: "Invalid Base64 string",
    }),
  });

  const { base64 } = schema.parse(request.body);

  reply.status(200).send(base64);
}
