import { Response, Request } from "express";
import { TUser } from "../interfaces/user.interface";
import { createUserService } from "../services/users/createUser.service";
import { listUsersService } from "../services/users/listAllUsers.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { updateUserService } from "../services/users/updateUser.service";

const createUserController = async (req: Request, res: Response) => {
  const data: TUser = req.body;
  const newUser = await createUserService(data);
  return res.status(201).json(newUser);
};
const getAllUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.json(users);
};
const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(req.params.id);
  return res.status(204).send();
};
const updateUserController = async (req: Request, res: Response) => {
  const newValues = req.body;
  const id = req.params.id;
  const updateUser = await updateUserService(newValues, id);
  return res.json(updateUser);
};

export {
  createUserController,
  getAllUsersController,
  deleteUserController,
  updateUserController,
};
