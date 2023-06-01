import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users.entitie";
import { AppError } from "../../errors/AppError";
import { TUser, TUserResquest } from "../../interfaces/user.interface";
import { userSchema } from "../../schemas/user.schema";

const createUserService = async ({
  name,
  email,
  phone,
}: TUserResquest): Promise<TUser> => {
  const userRepository = AppDataSource.getRepository(Users);
  const findUser = await userRepository.findOne({
    where: { email },
  });

  if (findUser) {
    throw new AppError("User already exists", 409);
  }
  const user = userRepository.create({
    email,
    name,
    phone,
  });
  await userRepository.save(user);

  return userSchema.parse(user);
};
export { createUserService };
