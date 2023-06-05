import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { returnMultipleContactSchema } from "../../schemas/contact.schema";
import { TContactResponse } from "../../interfaces/contact.interface";
import { Contact } from "../../entities/contact.entitie";
import { Users } from "../../entities/users.entitie";
import { AppError } from "../../errors/AppError";

const listContactsService = async (
  userId: string
): Promise<TContactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const usersRepository: Repository<Users> = AppDataSource.getRepository(Users);
  const user: Users | null = await usersRepository.findOneBy({
    id: userId,
  });
  console.log("==========================");
  console.log(userId);
  console.log("==========================");
  if (!user) {
    throw new AppError("User not found", 404);
  }
  const contact: Contact[] = await contactRepository.find({
    where: {
      users: user,
    },
  });
  console.log(user);
  console.log(contact);
  const users = returnMultipleContactSchema.parse(contact);
  return users;
};
export { listContactsService };
