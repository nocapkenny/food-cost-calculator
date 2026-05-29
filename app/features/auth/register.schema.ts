import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

export const registerSchema = toTypedSchema(
    z.object({
        first_name: z.string({
            required_error: "Введите имя",
            invalid_type_error: "Введите имя",
        }).min(1, "Введите имя"),
        last_name: z.string({
            required_error: "Введите фамилию",
            invalid_type_error: "Введите фамилию",
        }).min(1, "Введите фамилию"),
        email: z.string({
            required_error: "Введите почту",
            invalid_type_error: "Введите почту",
        }).min(1, "Введите почту").email("Неккоректная почта"),
        password: z.string({
            required_error: "Введите пароль",
            invalid_type_error: "Введите пароль",
        }).min(1, "Введите пароль"),
    })
)