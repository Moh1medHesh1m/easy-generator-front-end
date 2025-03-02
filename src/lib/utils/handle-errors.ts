import axios from 'axios';
import { toast } from 'react-toastify';

import type { AxiosErrorResponse } from '../requests/errors';
import {
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  UnauthenticatedError,
  UnexpectedError,
} from '../requests/errors';

export function axiosErrorHandler(err: unknown) {
  if (axios.isAxiosError(err)) {
    const responseData = err as AxiosErrorResponse;
    // toast
    toast.error(`${responseData.message}`, {
      position: 'top-left',
      autoClose: 100000,
    });
    if (err.response?.status === 400)
      throw new BadRequestError(responseData.error);
    if (err.response?.status === 401)
      throw new UnauthenticatedError(responseData.error);
    if (err.response?.status === 403)
      throw new ForbiddenError(responseData.error);
    if (err.response?.status === 404)
      throw new UnexpectedError(responseData.error);
    if (err.response?.status === 500) throw new InternalServerError();
  }
}
