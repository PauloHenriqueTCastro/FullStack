import { Request, Response } from "express";
import { TContact } from "../interfaces/contact.interface";
import { createContactService } from "../services/contacts/createContact.service";
import { listContactsService } from "../services/contacts/listAllContacs.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import { updateContactService } from "../services/contacts/updateContact.service";

const createContactController = async (req: Request, res: Response) => {
  const data: TContact = req.body;
  const userId: number = parseInt(req.params.id);
  const newUser = await createContactService(data, userId);
  return res.status(201).json(newUser);
};
const retriveContactsController = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);
  const users = await listContactsService(userId);
  return res.json(users);
};
const deleteContactController = async (req: Request, res: Response) => {
  await deleteContactService(parseInt(req.params.id));
  return res.status(204).send();
};
const updateContactController = async (req: Request, res: Response) => {
  const newValues = req.body;
  const id = parseInt(req.params.id);
  const updateContact = await updateContactService(newValues, id);
  return res.json(updateContact);
};
export {
  createContactController,
  retriveContactsController,
  deleteContactController,
  updateContactController,
};
