import { RegisterOptions, UseFormGetValues } from "react-hook-form";

type Rules = {
  [key in "email" | "password" | "confirmPassword"]?: RegisterOptions;
};

export const rules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: "Email là bắt buộc",
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Email không đúng định dạng",
    },
    maxLength: {
      value: 160,
      message: "Độ dài từ 5 - 160 ký tự",
    },
    minLength: {
      value: 5,
      message: "Độ dài từ 5 - 160 ký tự",
    },
  },
  password: {
    required: {
      value: true,
      message: "Password là bắt buộc",
    },
    maxLength: {
      value: 160,
      message: "Độ dài từ 6 - 160 ký tự",
    },
    minLength: {
      value: 6,
      message: "Độ dài từ 6 - 160 ký tự",
    },
  },
  confirmPassword: {
    required: {
      value: true,
      message: "Nhập lại password là bắt buộc",
    },
    validate:
      typeof getValues === "function"
        ? (value) =>
            value === getValues("password") || "Nhập lại password không khớp"
        : undefined,
  },
});

