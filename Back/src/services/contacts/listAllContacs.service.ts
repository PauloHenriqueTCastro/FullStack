import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { returnMultipleContactSchema } from "../../schemas/contact.schema";
import { TContact } from "../../interfaces/contact.interface";
import { Contact } from "../../entities/contact.entitie";

const listContactsService = async (): Promise<TContact[]> => {
  const userRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const findUsers = await userRepository.find();
  const users: TContact[] = returnMultipleContactSchema.parse(findUsers);
  return users;
};
export { listContactsService };
