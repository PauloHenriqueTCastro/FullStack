import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users.entitie";
import { AppError } from "../../errors/AppError";
import { TUser, TUserUpdate } from "../../interfaces/user.interface";
import { userSchema } from "../../schemas/user.schema";

const updateUserService = async (
  data: TUserUpdate,
  id: number
): Promise<TUser> => {
  const userRepository: Repository<Users> = AppDataSource.getRepository(Users);
  const oldUser: Users | null = await userRepository.findOneBy({
    id: id,
  });

  if (!oldUser) {
    throw new AppError("User not found", 404);
  }
  const newUserData = userRepository.create({
    ...oldUser,
    ...data,
  });
  await userRepository.save(newUserData);

  return userSchema.parse(newUserData);
};

export { updateUserService };
