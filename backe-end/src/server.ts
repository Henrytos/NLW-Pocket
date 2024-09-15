import { fastify } from "fastify";
import { env } from "./env";

const fastiry = fastify();

fastiry
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`Server is running on port ${env.PORT}`);
  });
