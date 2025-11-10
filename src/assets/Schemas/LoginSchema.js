import * as zod from 'zod';


export const schema = zod.object({
    email: zod
      .string()
      .nonempty("Email is required")
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"),
    password: zod
      .string()
      .nonempty("Password is required")
      .regex(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{5,20}$/,
        "Password must have uppercase, lowercase, number, and special character"
      )
})