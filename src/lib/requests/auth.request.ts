import axios from 'axios';

import type {
  SignInFormData,
  SignInResponseData,
} from '../types/auth.type';
import { apiClient } from './constants';
import type { AxiosErrorResponse } from './errors';
import {
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  UnauthenticatedError,
  UnexpectedError,
} from './errors';

export const login = async (data: SignInFormData) => {
  try {
    const result = await apiClient.post<SignInResponseData>(
      '/auth/login',
      data
    );
    return result.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const responseData = err.response?.data as AxiosErrorResponse;

      if (err.response?.status === 400) {
        throw new BadRequestError(responseData.message);
      }
      if (err.response?.status === 401)
        throw new UnauthenticatedError(responseData.message);
      if (err.response?.status === 403)
        throw new ForbiddenError(responseData.message);
      if (err.response?.status === 404)
        throw new UnexpectedError(responseData.message);
      if (err.response?.status === 500) throw new InternalServerError();
    }

    throw new UnexpectedError();
  }
};

export const register = async (data: any) => {
  try {
    const result = await apiClient.post<any>(
      '/auth/register',
      data
    );
    return result.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const responseData = err.response?.data as AxiosErrorResponse;
      if (err.response?.status === 400) {
        throw new BadRequestError(responseData.message);
      }
      if (err.response?.status === 401)
        throw new UnauthenticatedError(responseData.message);
      if (err.response?.status === 403)
        throw new ForbiddenError(responseData.message);
      if (err.response?.status === 404)
        throw new UnexpectedError(responseData.message);
      if (err.response?.status === 500) throw new InternalServerError();
    }

    throw new UnexpectedError();
  }
};
