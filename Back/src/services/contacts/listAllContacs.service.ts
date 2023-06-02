import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { returnMultipleContactSchema } from "../../schemas/contact.schema";
import { TContactResponse } from "../../interfaces/contact.interface";
import { Contact } from "../../entities/contact.entitie";
import { Users } from "../../entities/users.entitie";
import { AppError } from "../../errors/AppError";

const listContactsService = async (
  userId: number
): Promise<TContactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const usersRepository: Repository<Users> = AppDataSource.getRepository(Users);

  const user: Users | null = await usersRepository.findOneBy({
    id: userId,
  });
  if (!user) {
    throw new AppError("User not found", 404);
  }
  const contact: Contact[] = await contactRepository.find({
    where: {
      users: user,
    },
  });
  const users = returnMultipleContactSchema.parse(contact);
  return users;
};
export { listContactsService };
