import { z } from "zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email("Deve ser um email"),
  phone: z.string(),
});

export type TRegisterContactsData = z.infer<typeof schema>;
export { schema };
