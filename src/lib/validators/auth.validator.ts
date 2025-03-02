import * as Yup from 'yup';

import { ERROR_MESSAGES } from './constants';

export const SignInFormValidator = Yup.object().shape({
  email: Yup.string().email().required(ERROR_MESSAGES.required),
  password: Yup.string().required(ERROR_MESSAGES.required),
});

export const SignUpValidator = Yup.object().shape({
  name: Yup.string().required(ERROR_MESSAGES.required),
  email: Yup.string().email().required(ERROR_MESSAGES.required),
  password: Yup.string()
    .required(ERROR_MESSAGES.required)
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[\W_]/, 'Password must contain at least one special character'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required(ERROR_MESSAGES.required),
});

