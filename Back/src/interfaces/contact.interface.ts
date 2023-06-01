import { z } from "zod";
import { userSchema, userSchemaRequest } from "../schemas/user.schema";
import { DeepPartial } from "typeorm";

type TContact = z.infer<typeof userSchema>;
type TContactResquest = z.infer<typeof userSchemaRequest>;
type TContactUpdate = DeepPartial<TContactResquest>;

export { TContact, TContactResquest, TContactUpdate };
