import { z } from "zod";

const USERNAME_MIN_LENGTH: number = 3;
const USERNAME_MAX_LENGTH: number = 20;
const USERNAME_PATTERN: RegExp = /^[a-zA-Z0-9 ]*$/;

const PASSWORD_MIN_LENGTH: number = 8;
const PASSWORD_PATTERN: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[\w@$!%*#?&]+$/;

export const USERNAME_SCHEMA = z
  .string()
  .pipe(z.string().min(USERNAME_MIN_LENGTH, `Username must be at least ${USERNAME_MIN_LENGTH} characters`))
  .pipe(z.string().max(USERNAME_MAX_LENGTH, `Username cannot exceed ${USERNAME_MAX_LENGTH} characters`))
  .pipe(z.string().regex(USERNAME_PATTERN, "Username must contain only letters and numbers"));

export const EMAIL_SCHEMA = z
  .string()
  .pipe(z.string().nonempty("Email is required"))
  .pipe(z.string().email("Invalid email format"));

export const PASSWORD_SCHEMA = z
  .string()
  .pipe(z.string().min(PASSWORD_MIN_LENGTH, `Password must be at least ${PASSWORD_MIN_LENGTH} characters`))
  .pipe(z.string().regex(PASSWORD_PATTERN, "Password must contain letters, numbers, and special characters"));
