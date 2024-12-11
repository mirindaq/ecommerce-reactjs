import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import Input from "../../../components/Input/Input";
import { registerSchema, RegisterSchema } from "../../../utils/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { registerAccount } from "../../../apis/auth.api";
import { isAxiosConflictError } from "../../../utils/utils";
import { ResponseApi } from "../../../types/utils.type";
import Button from "../../../components/Button/Button";
import { path } from "../../../constants/path";

type FormData = RegisterSchema;

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, "confirmPassword">) =>
      registerAccount(body),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    registerAccountMutation.mutate(data, {
      onSuccess: () => {
        alert("Đăng ký thành công");
        navigate(path.login);
        reset();
      },
      onError: (error) => {
        if (
          isAxiosConflictError<ResponseApi<Omit<FormData, "confirmPassword">>>(
            error
          )
        ) {
          const formError = error.response?.data.data;
          if (formError?.email) {
            setError("email", {
              message: formError.email,
              type: "Server",
            });
          }
        }
      },
    });
  };

  return (
    <>
      <div className="bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-6 lg:py-28 lg:pr-10">
            <div className="hidden lg:col-span-3  lg:flex lg:justify-center mr-3 ">
              <img
                src="https://cdn.tgdd.vn/2022/10/banner/TGDD-540x270.png"
                className="object-contain max-w-full h-auto"
                alt="Banner"
              />
            </div>

            <div className="my-12 mx-20 lg:col-span-3 lg:col-start-4 lg:my-0 lg:mx-0 ">
              <form
                className="bg-white shadow-lg rounded-3xl px-8 py-8 sm:px-16 sm:py-12 mb-4 w-full mx-auto"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Username input */}
                <div className="mb-6">
                  <label
                    htmlFor="username"
                    className="block text-sm  font-semibold text-gray-800 mb-3"
                  >
                    Email
                  </label>
                  <Input
                    name="email"
                    register={register}
                    type="email"
                    errorMassage={errors.email?.message}
                    placeholder="Email"
                    defaultValue=""
                    disabled={false}
                    className="shadow-md appearance-none border border-gray-300 rounded-full w-full py-3.5 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm  font-semibold text-gray-800 mb-3"
                  >
                    Mật khẩu
                  </label>
                  <Input
                    name="password"
                    register={register}
                    type="password"
                    errorMassage={errors.password?.message}
                    placeholder="Password"
                    disabled={false}
                    defaultValue=""
                    className="shadow-md appearance-none border border-gray-300 rounded-full w-full py-3.5 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="againPassword"
                    className="block text-sm  font-semibold text-gray-800 mb-3"
                  >
                    Nhập lại mật khẩu
                  </label>
                  <Input
                    name="confirmPassword"
                    register={register}
                    type="password"
                    errorMassage={errors.confirmPassword?.message}
                    placeholder="Password"
                    defaultValue=""
                    disabled={false}
                    className="shadow-md appearance-none border border-gray-300 rounded-full w-full py-3.5 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <Button
                    className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 flex justify-center items-center"
                    type="submit"
                    disabled={registerAccountMutation.isPending}
                    isLoading={registerAccountMutation.isPending}
                  >
                    Đăng ký
                  </Button>
                </div>
                <div className="flex items-center justify-center mt-8">
                  <div className="text-gray-500 mr-2">Bạn đã có tài khoản</div>
                  <Link to={path.login} className="text-orange-500">
                    Đăng nhập
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
