import { Link, useNavigate } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../components/Input/Input";
import { loginSchema, LoginSchema } from "../../utils/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { loginAccount } from "../../apis/auth.api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AppContext } from "../../contexts/app.context";
import Button from "../../components/Button/Button";
import { path } from "../../constants/path";

type FormData = LoginSchema;
export default function Login() {
  const { setIsAuthenticated, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const loginAccountMutation = useMutation({
    mutationFn: (body: { email: string; password: string }) => {
      return loginAccount(body);
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        reset();
        setIsAuthenticated(true);
        console.log(data.data.data.user);
        setUser(data.data.data.user);
        toast.success("Đăng nhập thành công");
        navigate(path.home);
      },
      onError: () => {
        toast.error("Email hoặc mật khẩu không chính xác");
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

            <div className="my-12 lg:col-span-3 lg:col-start-4 lg:my-0 lg:mx-0 ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white shadow-lg rounded-3xl px-8 py-8 sm:px-16 sm:py-12 mb-4 w-full mx-auto"
              >
                <div className="mb-6">
                  <label
                    htmlFor="email"
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
                <div>
                  <Button
                    className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 flex justify-center items-center"
                    type="submit"
                    disabled={loginAccountMutation.isPending}
                    isLoading={loginAccountMutation.isPending}
                  >
                    Đăng nhập
                  </Button>
                </div>
                <div className="mt-4 text-center">
                  <a
                    className="text-sm text-black hover:text-yellow-600"
                    href="#"
                  >
                    Quên mật khẩu
                  </a>
                </div>

                <div className="flex items-center justify-center mt-8">
                  <div className="text-gray-500 mr-2">
                    Bạn chưa có tài khoản
                  </div>
                  <Link to={path.register} className="text-orange-500">
                    Đăng ký
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
