import { AppDataSource } from "../data-source";
import { User } from "../entities/User.entity";

const userRepo = AppDataSource.getRepository(User);

export const createUser = async (data: Partial<User>) => {
  const user = userRepo.create(data);
  return await userRepo.save(user);
};

export const getAllUsers = async () => {
  return await userRepo.find();
};

export const getUserById = async (id: number) => {
  return await userRepo.findOneBy({ id });
};

export const updateUser = async (id: number, data: Partial<User>) => {
  const user = await userRepo.findOneBy({ id });
  if (!user) return null;
  Object.assign(user, data);
  return await userRepo.save(user);
};

export const deleteUser = async (id: number) => {
  const user = await userRepo.findOneBy({ id });
  if (!user) return null;
  await userRepo.remove(user);
  return true;
};
