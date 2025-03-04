"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import EmailInputField from "@/components/atoms/EmailInputField/EmailInputField";
import PasswordInputField from "@/components/atoms/PasswordInputField/PasswordInputField";
import { useAppDispatch } from "@/lib/hooks";
import { authThunks } from "@/lib/redux/features/auth.slice";
import type { IError } from "@/lib/requests/errors";
import type { SignInFormData } from "@/lib/types/auth.type";
import { SignInFormValidator } from "@/lib/validators/auth.validator";

export default function SignInForm() {
  const dispatch = useAppDispatch();
  const methods = useForm<SignInFormData>({
    mode: "onSubmit",
    resolver: yupResolver(SignInFormValidator),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: SignInFormData) => {
    setIsLoading(true);

    dispatch(authThunks.signIn(data))
      .then(() => {
        router.push("/home");
        setIsLoading(false);
      })
      .catch((err: IError) => err.handle())
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <EmailInputField
            register={register("email")}
            labelText="Email"
            placeholder="example@domain.com"
            errorMessage={errors.email?.message}
          />
          <PasswordInputField
            register={register("password")}
            labelText="Password"
            errorMessage={errors.password?.message}
          />
          <Button type="submit" disabled={isLoading}>
            { "Submit" }
          </Button>{" "}
        </form>
      </FormProvider>
      <div className="flex justify-between">
        <Link href={"/auth/register"}> Create new account</Link>
      </div>
    </div>
  );
}
