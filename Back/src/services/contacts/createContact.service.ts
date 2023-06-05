import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { Users } from "../../entities/users.entitie";
import { AppError } from "../../errors/AppError";
import { TContact, TContactResquest } from "../../interfaces/contact.interface";
import { contactSchema } from "../../schemas/contact.schema";

const createContactService = async (
  data: TContactResquest,
  userId: string
): Promise<TContact> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const userRepository: Repository<Users> = AppDataSource.getRepository(Users);
  const users: Users | null = await userRepository.findOneBy({ id: userId });
  if (!users) {
    throw new AppError("User not found", 404);
  }
  const contact: Contact = contactRepository.create({
    ...data,
    users,
  });
  await contactRepository.save(contact);

  return contactSchema.parse(contact);
};

export { createContactService };
