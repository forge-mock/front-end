export interface UserInfo {
  id: string;
  name: string;
  email: string;
}

export interface UserInfoUpdate {
  newUserEmail: string;
  username: string;
}

export interface PasswordUpdate {
  oldPassword: string;
  newPassword: string;
}
