import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { usersRoutes } from "./routes/users.routes";
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middlewares";
import { contactsRoutes } from "./routes/contact.routes";
import { loginRoutes } from "./routes/login.routes";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", usersRoutes);
app.use("/contacts", contactsRoutes);
app.use("/login", loginRoutes);
app.use(handleAppErrorMiddleware);
export default app;
