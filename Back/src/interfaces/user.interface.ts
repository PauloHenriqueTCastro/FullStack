import { z } from "zod";
import { userSchema, userSchemaRequest } from "../schemas/user.schema";
import { DeepPartial } from "typeorm";

type TUser = z.infer<typeof userSchema>;
type TUserResquest = z.infer<typeof userSchemaRequest>;
type TUserUpdate = DeepPartial<TUserResquest>;

export { TUser, TUserResquest, TUserUpdate };
