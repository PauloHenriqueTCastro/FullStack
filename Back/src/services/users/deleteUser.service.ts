import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users.entitie";
import { AppError } from "../../errors/AppError";

const deleteUserService = async (id: string): Promise<void> => {
  const usersRepository: Repository<Users> = AppDataSource.getRepository(Users);
  const user: Users | null = await usersRepository.findOneBy({
    id: id,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  await usersRepository.remove(user);
};

export { deleteUserService };
