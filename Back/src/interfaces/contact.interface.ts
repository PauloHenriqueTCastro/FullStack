import { z } from "zod";

import { DeepPartial } from "typeorm";
import {
  contactSchema,
  contactSchemaRequest,
  returnMultipleContactSchema,
} from "../schemas/contact.schema";

type TContact = z.infer<typeof contactSchema>;
type TContactResquest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof returnMultipleContactSchema>;
type TContactUpdate = DeepPartial<TContactResquest>;
export { TContact, TContactResquest, TContactUpdate, TContactResponse };
