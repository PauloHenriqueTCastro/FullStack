import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  createContactController,
  deleteContactController,
  retriveContactsController,
  updateContactController,
} from "../controllers/contacts.controller";
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from "../schemas/contact.schema";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";

const contactsRoutes = Router();

contactsRoutes.use(ensureAuthMiddleware);

contactsRoutes.get("/", retriveContactsController);
contactsRoutes.post(
  "/",
  ensureDataIsValidMiddleware(contactSchemaRequest),
  createContactController
);
contactsRoutes.delete("/:id", deleteContactController);
contactsRoutes.patch(
  "/:id",
  ensureIsOwnerMiddleware,
  ensureDataIsValidMiddleware(contactSchemaUpdate),
  updateContactController
);
export { contactsRoutes };
