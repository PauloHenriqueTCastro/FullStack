import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users.entitie";
import { AppError } from "../../errors/AppError";
import { TUserResponse } from "../../interfaces/user.interface";
import { TUserResquest } from "../../interfaces/user.interface";
import { userSchemaResponse } from "../../schemas/user.schema";
import { hash } from "bcryptjs";
const createUserService = async ({
  name,
  email,
  phone,
  password,
}: TUserResquest): Promise<TUserResponse> => {
  const userRepository = AppDataSource.getRepository(Users);
  const findUser = await userRepository.findOne({
    where: { email },
  });

  if (findUser) {
    throw new AppError("User already exists", 409);
  }
  const hashedPassword = await hash(password, 10);
  const user = userRepository.create({
    email,
    name,
    phone,
    password: hashedPassword,
  });
  await userRepository.save(user);

  return userSchemaResponse.parse(user);
};
export { createUserService };
