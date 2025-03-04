export type AuthState = {
  accessToken: string;
  user: User | null;
  isAuth: boolean;
};

export type SignInFormData = {
  email: string;
  password: string;
};

export type SignInResponseData = {
  user: User;
  accessToken: string;
};

export type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type User = {
  createdAt: string;
  email: string;
  name: string;
  updatedAt: string;
  _id: string;
};
