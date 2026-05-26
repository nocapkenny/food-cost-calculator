import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

export const loginSchema = toTypedSchema(
  z.object({
    email: z.string().min(1, "Введите почту").email("Неккоректная почта"),
    password: z.string().min(1, "Введите пароль"),
  }),
);
