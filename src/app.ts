import Fastify from "fastify";
import { userRoutes } from "./routes/user.routes";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import rateLimit from "@fastify/rate-limit";
import dotenv from "dotenv";

dotenv.config();

export const app = Fastify({ logger: true });

// Rate limiting: 5 requests/sec per IP
app.register(rateLimit, {
  max: 5,
  timeWindow: "1 second",
});

// Swagger docs
app.register(swagger, {
  swagger: {
    info: {
      title: "Fastify TypeORM CRUD API",
      description: "User CRUD API with PostgreSQL",
      version: "1.0.0",
    },
  },
});

app.register(swaggerUI, {
  routePrefix: "/docs",
  uiConfig: { docExpansion: "full", deepLinking: false },
});

// Root route
app.get("/", async () => ({ message: "Fastify + TypeORM CRUD API is working!" }));

// Register user routes
app.register(userRoutes);
