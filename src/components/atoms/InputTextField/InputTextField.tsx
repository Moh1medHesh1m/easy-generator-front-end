import { Label, TextInput } from 'flowbite-react';
import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import ErrorText from '../ErrorText/ErrorText';

export type InputFieldProps = {
  labelText: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined;
};
export default function TextInputField({
  labelText,
  placeholder,
  register,
  errorMessage,
  icon,
}: InputFieldProps) {
  return (
    <div className="mb-2 block">
      <Label value={labelText} />
      <TextInput
        icon={icon}
        type="text"
        placeholder={placeholder}
        required={false}
        {...register}
      />
      {errorMessage && <ErrorText errorMessage={errorMessage} />}
    </div>
  );
}
