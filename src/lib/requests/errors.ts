// eslint-disable-next-line max-classes-per-file
import type { SerializedError } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export type AxiosErrorResponse = {
  statusCode?: number;
  message?: string;
  error?: string;
};

export interface IError {
  handle(): void;
}

export class InternalServerError extends Error implements IError {
  // eslint-disable-next-line unused-imports/no-unused-vars
  constructor() {
    super();
    this.name = 'InternalServerError';
  }

  handle(): void {
    if (this.message) {
      toast.error(this.message, { position: 'top-left' });
    }
  }
}

export class UnexpectedError extends Error implements IError {
  constructor(message?: string) {
    super(message);
    this.name = 'UnexpectedError';
  }

  handle(): void {
    if (this.message) {
      toast.error(this.message, { position: 'top-left' });
    } else {
      toast.error('Unexpected error, please try again', {
        position: 'top-left',
      });
    }
  }
}

export class UnauthenticatedError extends Error implements IError {
  message: string = 'Unauthenticated';

  constructor(message?: string) {
    super(message);
    this.name = 'UnauthenticatedError';
  }

  handle() {
    if (this.message) {
      toast.error(this.message, { position: 'top-left' });
    }
  }
}

export class ForbiddenError extends Error implements IError {
  constructor(message?: string) {
    super(message);
    this.name = 'ForbiddenError';
  }

  handle(): void {
    if (this.message) {
      toast.error(this.message, { position: 'top-left' });
    } else {
      toast.error("You're not authorized to make access this action", {
        position: 'top-left',
      });
    }
  }
}

export class BadRequestError extends Error implements IError {
  constructor(message?: string) {
    super(message);
    this.name = 'BadRequestError';
  }

  handle(): void {
    if (this.message) {
      toast.error(this.message, { position: 'top-left' });
    } else {
      toast.error('Bad Request, please try again with correct data', {
        position: 'top-left',
      });
    }
  }
}

export function throwError(err: SerializedError) {
  switch (err.name) {
    case 'UnexpectedError':
      throw new UnexpectedError(err.message);
    case 'BadRequestError':
      throw new BadRequestError(err.message);
    case 'ForbiddenError':
      throw new ForbiddenError(err.message);
    case 'UnauthenticatedError':
      throw new UnauthenticatedError(err.message);
    default:
      throw new InternalServerError();
  }
}
