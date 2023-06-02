import { z } from "zod";

const schema = z.object({
  email: z.string().email("Deve ser um email"),
  password: z.number(),
});

export type TLoginData = z.infer<typeof schema>;
export { schema };
