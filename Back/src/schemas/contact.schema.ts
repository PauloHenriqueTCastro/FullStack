import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.number(),
});

const contactSchemaRequest = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.number(),
});
const contactSchemaUpdate = contactSchema.partial();
const returnMultipleContactSchema = contactSchema.array();
export {
  contactSchema,
  contactSchemaRequest,
  returnMultipleContactSchema,
  contactSchemaUpdate,
};
