import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.number(),
});
const userSchemaRequest = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.number(),
});
const userSchemaUpdate = userSchema.partial();
const returnMultipleUserSchema = userSchema.array();
export {
  userSchema,
  userSchemaRequest,
  returnMultipleUserSchema,
  userSchemaUpdate,
};
