import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: React.HTMLInputTypeAttribute;
  errorMassage?: string;
  placeholder?: string;
  name: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  defaultValue?: string;
  className: string;
  disabled: boolean;
}

export default function Input(props: InputProps) {
  const {
    type,
    errorMassage,
    placeholder,
    name,
    register,
    rules,
    defaultValue,
    className,
    disabled,
  } = props;

  return (
    <>
      <input
        className={className}
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, { ...rules, value: defaultValue })}
        disabled={disabled}
      />
      {errorMassage && <p className="text-red-500 mt-3">{errorMassage}</p>}
    </>
  );
}
