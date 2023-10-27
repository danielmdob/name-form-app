'use client'

import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { getFullName } from '@/app/actions';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({type, ...props}, ref) => {
    return (
      <input
        type={type}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export const NameForm = () => {
  const [serverResponse, setServerResponse] = useState<string | null>(null)
  const {register, handleSubmit} = useForm<FullName>();
  const action: () => void = handleSubmit(async (data) => {
    const response = await getFullName(data);
    setServerResponse(response);
  });
  return <>
    <form action={action} className="flex flex-col items-center space-y-2">
      <Input placeholder="First Name" {...register('firstName')} />
      <Input placeholder="Last Name" {...register('lastName')} />

      <button className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5" type="submit">
        Confirm
      </button>
    </form>
    Server response: {serverResponse}
  </>
}
