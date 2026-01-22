import { FastifyReply, FastifyRequest } from "fastify";
import * as userService from "../services/user.service";
import Joi from "joi";

// Validation schema
const userSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(0).required(),
});

export const createUser = async (req: FastifyRequest, reply: FastifyReply) => {
  const { error, value } = userSchema.validate(req.body);
  if (error) return reply.code(400).send({ error: error.details[0].message });

  const user = await userService.createUser(value);
  reply.code(201).send(user);
};

export const getAllUsers = async (_req: FastifyRequest, reply: FastifyReply) => {
  const users = await userService.getAllUsers();
  reply.send(users);
};

export const getUserById = async (req: FastifyRequest, reply: FastifyReply) => {
  const id = Number((req.params as any).id);
  const user = await userService.getUserById(id);
  if (!user) return reply.code(404).send({ error: "User not found" });
  reply.send(user);
};

export const updateUser = async (req: FastifyRequest, reply: FastifyReply) => {
  const id = Number((req.params as any).id);
  const { error, value } = userSchema.validate(req.body);
  if (error) return reply.code(400).send({ error: error.details[0].message });

  const updated = await userService.updateUser(id, value);
  if (!updated) return reply.code(404).send({ error: "User not found" });
  reply.send(updated);
};

export const deleteUser = async (req: FastifyRequest, reply: FastifyReply) => {
  const id = Number((req.params as any).id);
  const deleted = await userService.deleteUser(id);
  if (!deleted) return reply.code(404).send({ error: "User not found" });
  reply.send({ message: "User deleted successfully" });
};
