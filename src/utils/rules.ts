import * as yup from "yup";

export const registerSchema = yup
  .object({
    email: yup
      .string()
      .required("Email là bắt buộc")
      .email("Email không đúng định dạng")
      .min(5, "Độ dài từ 5 - 160 kí tự")
      .max(160, "Độ dài từ 5 - 160 kí tự"),

    password: yup
      .string()
      .required("Password là bắt buộc")
      .min(6, "Độ dài từ 6 - 160 ký tự")
      .max(160, "Độ dài từ 6 - 160 ký tự"),
    confirmPassword: yup
      .string()
      .required("Confirm Password là bắt buộc")
      .oneOf([yup.ref("password")], "Mật khẩu xác nhận không khớp"),
  })
  .required();

export const loginSchema = registerSchema.omit(["confirmPassword"]);

export type LoginSchema = yup.InferType<typeof loginSchema>;
export type RegisterSchema = yup.InferType<typeof registerSchema>;
