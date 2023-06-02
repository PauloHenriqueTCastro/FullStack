import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users.entitie";
import { AppError } from "../../errors/AppError";
import { TLoginRequest } from "./../../interfaces/login.interfaces";
import jwt from "jsonwebtoken";
import "dotenv/config";
const createTokenService = async ({
  email,
  password,
}: TLoginRequest): Promise<string> => {
  const userRepository = AppDataSource.getRepository(Users);
  const user = await userRepository.findOne({
    where: {
      email,
    },
  });
  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 403);
  }
  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY!, {
    expiresIn: "1h",
  });
  return token;
};
export { createTokenService };
