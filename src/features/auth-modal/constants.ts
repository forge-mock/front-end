import { z } from "zod";

export const LOGIN_FIELDS = {
  userEmail: "userEmail",
  password: "password",
};

export const REGISTER_FIELDS = {
  username: "username",
  ...LOGIN_FIELDS,
};

const USERNAME_MIN_LENGTH: number = 3;
const USERNAME_MAX_LENGTH: number = 20;
const USERNAME_PATTERN: RegExp = /^[a-zA-Z0-9 ]*$/;

const PASSWORD_MIN_LENGTH: number = 8;
const PASSWORD_PATTERN: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[\w@$!%*#?&]+$/;

export const LOGIN_SCHEMA = z.object({
  [LOGIN_FIELDS.userEmail]: z
    .string()
    .pipe(z.string().nonempty("Email is required"))
    .pipe(z.string().email("Invalid email format")),

  [LOGIN_FIELDS.password]: z
    .string()
    .pipe(z.string().min(PASSWORD_MIN_LENGTH, `Password must be at least ${PASSWORD_MIN_LENGTH} characters`))
    .pipe(z.string().regex(PASSWORD_PATTERN, "Password must contain letters, numbers, and special characters")),
});

export const REGISTER_SCHEMA = z.object({
  [REGISTER_FIELDS.username]: z
    .string()
    .pipe(z.string().min(USERNAME_MIN_LENGTH, `Username must be at least ${USERNAME_MIN_LENGTH} characters`))
    .pipe(z.string().max(USERNAME_MAX_LENGTH, `Username cannot exceed ${USERNAME_MAX_LENGTH} characters`))
    .pipe(z.string().regex(USERNAME_PATTERN, "Username must contain only letters and numbers")),

  ...LOGIN_SCHEMA.shape,
});
