import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: React.HTMLInputTypeAttribute;
  errorMassage?: string;
  placeholder?: string;
  name: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
}

export default function Input(props: InputProps) {
  const { type, errorMassage, placeholder, name, register, rules } = props;
  return (
    <>
      <input
        className="shadow-md appearance-none border border-gray-300 rounded-full w-full py-3.5 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
      />
      <p className="text-red-500 mt-3">{errorMassage}</p>
    </>
  );
}
