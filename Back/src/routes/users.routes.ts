import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateUserController,
} from "../controllers/users.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/user.schema";

const usersRoutes = Router();

usersRoutes.post(
  "/",
  ensureDataIsValidMiddleware(userSchemaRequest),
  createUserController
);
usersRoutes.get("/", getAllUsersController);

usersRoutes.delete("/:id", deleteUserController);
usersRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(userSchemaUpdate),
  updateUserController
);
export { usersRoutes };
