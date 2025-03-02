import { Label, TextInput } from 'flowbite-react';
import React from 'react';

import type { InputFieldProps } from '../EmailInputField/EmailInputField';
import ErrorText from '../ErrorText/ErrorText';

export default function PasswordInputField({
  labelText,
  register,
  errorMessage,
}: Omit<InputFieldProps, 'placeholder'>) {
  return (
    <div className="mb-2 block">
      <Label value={labelText} />
      <TextInput type="password" required={true} {...register} />
      {errorMessage && <ErrorText errorMessage={errorMessage} />}
    </div>
  );
}
