import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { Contact } from "../../entities/contact.entitie";

const deleteContactService = async (id: number): Promise<void> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const contact: Contact | null = await contactsRepository.findOneBy({
    id: id,
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  await contactsRepository.remove(contact);
};

export { deleteContactService };
