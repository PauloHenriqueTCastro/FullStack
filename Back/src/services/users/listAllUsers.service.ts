import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users.entitie";
import { TUser } from "../../interfaces/user.interface";
const listUsersService = async (): Promise<TUser[]> => {
  const userRepository: Repository<Users> = AppDataSource.getRepository(Users);
  const listSchudles = await userRepository
    .createQueryBuilder("Users")
    .leftJoinAndSelect("Users.contact", "scheduleUser")
    .getMany();
  return listSchudles;
};
export { listUsersService };
