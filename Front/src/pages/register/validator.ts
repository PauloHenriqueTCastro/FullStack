import { z } from "zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email("Deve ser um email"),
  phone: z.string(),
  password: z.string(),
});

export type TRegisterData = z.infer<typeof schema>;
export { schema };
