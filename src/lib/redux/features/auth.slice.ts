/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  login,
  register,
} from '@/lib/requests/auth.request';
import { throwError } from '@/lib/requests/errors';
import type {
  AuthState,
  SignInFormData,
  SignUpFormData,
} from '@/lib/types/auth.type';

const initialState: AuthState = {
  user: null,
  accessToken: '',
  isAuth: false,
};

const signIn = createAsyncThunk(
  'auth/signIn',
  async (signInBody: SignInFormData, _) => {
    const response = await login(signInBody);
    return response;
  }
);
const signUp = createAsyncThunk(
  'auth/signUp',
  async (signUpBody: SignUpFormData, _) => {
    const response = await register(signUpBody);
    return response;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state: { user: any; accessToken: any; isAuth: boolean; },
      action: PayloadAction<{ user: any; accessToken: string }>
    ) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.isAuth = true;
    },
    logOut: (state: { user: null; accessToken: string; isAuth: boolean; }) => {
      state.user = null;
      state.accessToken = '';
      state.isAuth = false;
    },
  },
  extraReducers: (builder : any) => {
    builder.addCase(signIn.fulfilled, (state: { user: any; accessToken: any; isAuth: boolean; }, action: { payload: { user: any; accessToken: any; }; }) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isAuth = true;
    });

    builder.addCase(signIn.rejected, (_state: any, action: { error: any; }) => {
      throwError(action.error);
    });
    builder.addCase(
      signUp.fulfilled,
      (_state: { user: any; accessToken: any; isAuth: boolean; }, _action: PayloadAction<{ user: any; accessToken: string }>) => {
        toast.success('Account registered');
      }
    );
    builder.addCase(signUp.rejected, (_state: any, action: { error: any; }) => {
      throwError(action.error);
    });
  },
});

export const {
  setCredentials,
  logOut,
} = authSlice.actions;

export default authSlice.reducer;

export const authThunks = {
  signIn,
  signUp,
};
