import { FastifyInstance } from "fastify";
import * as userController from "../controllers/user.controller";

export async function userRoutes(app: FastifyInstance) {
  app.post("/users", userController.createUser);
  app.get("/users", userController.getAllUsers);
  app.get("/users/:id", userController.getUserById);
  app.put("/users/:id", userController.updateUser);
  app.delete("/users/:id", userController.deleteUser);
}
