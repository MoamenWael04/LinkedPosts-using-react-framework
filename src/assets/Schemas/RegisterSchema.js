
import * as zod from "zod";

export const schema = zod
  .object({
    name: zod
      .string()
      .nonempty("your name is required")
      .min(3, "name should be at least 3 characers")
      .max(20, "name should be at most 20 characers"),
    email: zod
      .string()
      .nonempty("email is required ")
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "invalid email"
      ),
    password: zod
      .string()
      .nonempty("password is required ")
      .regex(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{5,20}$/,
        "invalid password should hav3 an uppercase and special character"
      ),
    rePassword: zod.string().nonempty("password is required "),
    dateOfBirth: zod.coerce.date("date is required").refine((value) => {
      const userAge = value.getFullYear();
      const Year = new Date().getFullYear();
      const diff = Year - userAge;
      return diff >= 18;
    }, "you are less than 18"),
    gender: zod.string().nonempty("gender is required ")
  })
  .refine((data) => data.password === data.rePassword, {
    path: ["rePassword"],
    message: "password and rePassword does not match",
  });