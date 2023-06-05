import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entitie";

const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactsRepositoy = AppDataSource.getRepository(Contact);
  const contactId: string = req.params.id;
  const userId: string = res.locals.userId;

  const contact = await contactsRepositoy.findOne({
    where: {
      id: contactId,
    },
    relations: {
      users: true,
    },
  });

  if (!contact) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  if (contact.users.id !== userId) {
    return res.status(403).json({
      message: "You don`t have permissions",
    });
  }

  return next();
};

export { ensureIsOwnerMiddleware };
