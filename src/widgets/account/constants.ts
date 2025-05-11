import { z } from "zod";
import { USERNAME_SCHEMA, EMAIL_SCHEMA, PASSWORD_SCHEMA } from "@entities/user-info";

export const INFO_FIELDS = {
  newUserEmail: "newUserEmail",
  username: "username",
};

export const PASSWORDS_FIELDS = {
  oldPassword: "oldPassword",
  newPassword: "newPassword",
};

export const INFO_SCHEMA = z.object({
  [INFO_FIELDS.newUserEmail]: EMAIL_SCHEMA,
  [INFO_FIELDS.username]: USERNAME_SCHEMA,
});

export const PASSWORDS_SCHEMA = z.object({
  [PASSWORDS_FIELDS.oldPassword]: PASSWORD_SCHEMA,
  [PASSWORDS_FIELDS.newPassword]: PASSWORD_SCHEMA,
});
