import { Request, Response } from "express";
import { TContact } from "../interfaces/contact.interface";
import { createContactService } from "../services/contacts/createContact.service";
import { listContactsService } from "../services/contacts/listAllContacs.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import { updateContactService } from "../services/contacts/updateContact.service";

const createContactController = async (req: Request, res: Response) => {
  const data: TContact = req.body;
  const newUser = await createContactService(data, res.locals.userId);
  return res.status(201).json(newUser);
};
const retriveContactsController = async (req: Request, res: Response) => {
  const userId: string = res.locals.userId;
  const users = await listContactsService(userId);
  return res.json(users);
};
const deleteContactController = async (req: Request, res: Response) => {
  await deleteContactService(res.locals.userId);
  return res.status(204).send();
};
const updateContactController = async (req: Request, res: Response) => {
  const newValues = req.body;
  const updateContact = await updateContactService(
    newValues,
    res.locals.userId
  );
  return res.json(updateContact);
};
export {
  createContactController,
  retriveContactsController,
  deleteContactController,
  updateContactController,
};
