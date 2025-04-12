export interface Login {
  userEmail: string;
  password: string;
}

export interface Register extends Login {
  username: string;
}
