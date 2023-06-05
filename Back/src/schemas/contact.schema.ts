import { z } from "zod";

const contactSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

const contactSchemaRequest = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
});
const contactSchemaUpdate = contactSchema.partial();
const returnMultipleContactSchema = contactSchema.array();
export {
  contactSchema,
  contactSchemaRequest,
  returnMultipleContactSchema,
  contactSchemaUpdate,
};
