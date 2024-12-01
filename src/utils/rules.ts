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

export const profileSchema = yup
  .object({
    id: yup.string(),

    fullName: yup
      .string()
      .required("Tên đầy đủ là bắt buộc")
      .min(3, "Tên đầy đủ phải có ít nhất 3 kí tự")
      .max(100, "Tên đầy đủ tối đa 100 kí tự"),

    email: yup
      .string()
      .required("Email là bắt buộc")
      .email("Email không đúng định dạng")
      .min(5, "Độ dài từ 5 - 160 kí tự")
      .max(160, "Độ dài từ 5 - 160 kí tự"),

    phone: yup
      .string()
      .required("Số điện thoại là bắt buộc")
      .min(8, "Số điện thoại ít nhất là 8 số"),

    address: yup.string().max(255, "Địa chỉ tối đa 255 kí tự"),

    // avatar: yup
    //   .mixed()
    //   .optional()
    //   .test("fileSize", "Dung lượng ảnh không được vượt quá 5MB", (value  ) => {
    //     if (value && value.size) {
    //       return value.size <= 5 * 1024 * 1024; // 5MB
    //     }
    //     return true;
    //   })
    //   .test("fileType", "Chỉ chấp nhận ảnh PNG, JPG, JPEG", (value) => {
    //     if (value) {
    //       return ["image/png", "image/jpeg"].includes(value.type);
    //     }
    //     return true;
    //   }),
  })
  .required();

export const loginSchema = registerSchema.omit(["confirmPassword"]);

export type LoginSchema = yup.InferType<typeof loginSchema>;
export type RegisterSchema = yup.InferType<typeof registerSchema>;
export type ProfileSchema = yup.InferType<typeof profileSchema>;
