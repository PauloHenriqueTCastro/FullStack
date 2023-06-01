import { Repository } from "typeorm";
import { TContact, TContactUpdate } from "../../interfaces/contact.interface";
import { Contact } from "../../entities/contact.entitie";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { contactSchema } from "../../schemas/contact.schema";

const updateContactService = async (
  data: TContactUpdate,
  id: number
): Promise<TContact> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const oldContact: Contact | null = await contactRepository.findOneBy({
    id: id,
  });

  if (!oldContact) {
    throw new AppError("Contact not found", 404);
  }
  const newContactData = contactRepository.create({
    ...oldContact,
    ...data,
  });
  await contactRepository.save(newContactData);

  return contactSchema.parse(newContactData);
};

export { updateContactService };
