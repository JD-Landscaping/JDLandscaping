import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export default function InputField({
  label,
  ...props
}: Readonly<InputFieldProps>) {
  return (
    <div className='relative'>
      <label
        htmlFor={props.id}
        className='subtitle-text mx-2'
      >
        {label}
      </label>

      <input
        {...props}
        className={`input-field`}
      />
    </div>
  );
}
