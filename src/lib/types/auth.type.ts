
export type AuthState = {
  accessToken: string;
  user: any | null;
  isAuth: boolean;
};

export type SignInFormData = {
  email: string;
  password: string;
};

export type SignInResponseData = {
  user: any;
  accessToken: string;
};

export type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

