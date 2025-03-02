import { Label, TextInput } from 'flowbite-react';
import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import ErrorText from '../ErrorText/ErrorText';

export type InputFieldProps = {
  labelText: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
};
export default function EmailInputField({
  labelText,
  placeholder,
  register,
  errorMessage,
}: InputFieldProps) {
  return (
    <div className="mb-2 block">
      <Label value={labelText} />
      <TextInput
        type="email"
        placeholder={placeholder}
        required={true}
        {...register}
      />
      {errorMessage && <ErrorText errorMessage={errorMessage} />}
    </div>
  );
}
