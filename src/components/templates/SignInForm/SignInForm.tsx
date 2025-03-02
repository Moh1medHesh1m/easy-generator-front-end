'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Label } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import EmailInputField from '@/components/atoms/EmailInputField/EmailInputField';
import PasswordInputField from '@/components/atoms/PasswordInputField/PasswordInputField';
import { useAppDispatch } from '@/lib/hooks';
import { authThunks } from '@/lib/redux/features/auth.slice';
import type { IError } from '@/lib/requests/errors';
import type { SignInFormData } from '@/lib/types/auth.type';
import { SignInFormValidator } from '@/lib/validators/auth.validator';

export default function SignInForm() {
  const dispatch = useAppDispatch();
  const methods = useForm<SignInFormData>({
    mode: 'onSubmit',
    resolver: yupResolver(SignInFormValidator),
    defaultValues: {
      email : '',
      password: '',
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const router = useRouter();
  const onSubmit = (data: SignInFormData) => {
    dispatch(authThunks.signIn(data))
      .then(() => {
        router.push('/home');
      })
      .catch((err: IError) => err.handle());
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <EmailInputField
            register={register('email')}
            labelText="Email"
            placeholder="example@domain.com"
            errorMessage={errors.email?.message}
          />
          <PasswordInputField
            register={register('password')}
            labelText="Password"
            errorMessage={errors.password?.message}
          />
          <div className="flex items-center gap-2">
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
      <div className="flex justify-between">
        <Link href={'/auth/register'}> Create new account</Link>
      </div>
    </div>
  );
}
