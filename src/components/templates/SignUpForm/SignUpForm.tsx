"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import EmailInputField from "@/components/atoms/EmailInputField/EmailInputField";
import TextInputField from "@/components/atoms/InputTextField/InputTextField";
import PasswordInputField from "@/components/atoms/PasswordInputField/PasswordInputField";
import { useAppDispatch } from "@/lib/hooks";
import { authThunks } from "@/lib/redux/features/auth.slice";
import type { IError } from "@/lib/requests/errors";
import type { SignUpFormData } from "@/lib/types/auth.type";
import { SignUpValidator } from "@/lib/validators/auth.validator";

export default function SignUpForm() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const methods = useForm<SignUpFormData>({
    mode: "onSubmit",
    resolver: yupResolver(SignUpValidator),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: SignUpFormData) => {
    setIsLoading(true);
    dispatch(authThunks.signUp(data))
      .then(() => {
        router.push("/auth/login");
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
          <TextInputField
            register={register("name")}
            labelText="Full Name"
            placeholder="John Doe"
            errorMessage={errors.name?.message}
          />
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
          <PasswordInputField
            register={register("confirmPassword")}
            labelText="Confirm Password"
            errorMessage={errors.confirmPassword?.message}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </Button>{" "}
        </form>
      </FormProvider>
    </div>
  );
}
