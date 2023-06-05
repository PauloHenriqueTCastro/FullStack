import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string(),
  createdAt: z.string(),
});
const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
});
const userSchemaResponse = userSchema.omit({
  password: true,
});
const userSchemaUpdate = userSchemaResponse.partial();
const returnMultipleUserSchema = userSchema.array();
export {
  userSchema,
  userSchemaRequest,
  returnMultipleUserSchema,
  userSchemaUpdate,
  userSchemaResponse,
};
