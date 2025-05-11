import { z } from "zod";
import { USERNAME_SCHEMA, EMAIL_SCHEMA, PASSWORD_SCHEMA } from "@entities/user-info";

export const LOGIN_FIELDS = {
  userEmail: "userEmail",
  password: "password",
};

export const REGISTER_FIELDS = {
  username: "username",
  ...LOGIN_FIELDS,
};

export const LOGIN_SCHEMA = z.object({
  [LOGIN_FIELDS.userEmail]: EMAIL_SCHEMA,
  [LOGIN_FIELDS.password]: PASSWORD_SCHEMA,
});

export const REGISTER_SCHEMA = z.object({
  [REGISTER_FIELDS.username]: USERNAME_SCHEMA,
  ...LOGIN_SCHEMA.shape,
});
