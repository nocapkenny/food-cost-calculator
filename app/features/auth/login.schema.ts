import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

export const loginSchema = toTypedSchema(
  z.object({
    email: z.string({
      required_error: "Введите почту",
      invalid_type_error: "Введите почту",
    }).min(1, "Введите почту").email("Неккоректная почта"),
    password: z.string({
      required_error: "Введите пароль",
      invalid_type_error: "Введите пароль",
    }).min(1, "Введите пароль"),
  }),
);
