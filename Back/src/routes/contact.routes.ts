import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  updateContactController,
} from "../controllers/contacts.controller";
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from "../schemas/contact.schema";

const contactsRoutes = Router();
contactsRoutes.get("/", getAllContactsController);

contactsRoutes.post(
  "/:id",
  ensureDataIsValidMiddleware(contactSchemaRequest),
  createContactController
);

contactsRoutes.delete("/:id", deleteContactController);

contactsRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(contactSchemaUpdate),
  updateContactController
);
export { contactsRoutes };
