import Input from "../../../../components/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProfileSchema, profileSchema } from "../../../../utils/rules";
import Button from "../../../../components/Button/Button";
import { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import userApi from "../../../../apis/user.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { AppContext } from "../../../../contexts/app.context";
import { path } from "../../../../constants/path";

type FormData = ProfileSchema;

export default function Information() {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: yupResolver(profileSchema),
  });

  const updateProfileByUser = useMutation({
    mutationFn: (body: ProfileSchema) => {
      return userApi.updateProfileByUser(body);
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    updateProfileByUser.mutate(data, {
      onSuccess: (data) => {
        setUser(data.data.data);
        toast.success("Thay đổi thông tin thành công");
        navigate(path.information);
      },
      onError: () => {
        toast.error("Thay đổi thất bại");
      },
    });
  };

  return (
    <>
      <div className="bg-white border rounded-lg px-8 py-8 sm:px-16 sm:py-12 mb-4 w-full mx-auto">
        <h3 className="font-semibold text-xl mb-5">THÔNG TIN CÁ NHÂN</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="hidden">
            <input type="text" {...register("id")} value={user?.id} />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm  font-semibold text-gray-800 mb-2"
            >
              Email
            </label>
            <Input
              name="email"
              register={register}
              type="email"
              errorMassage={errors.email?.message}
              placeholder="Họ và tên"
              defaultValue={user?.email || ""}
              disabled={true}
              className="border border-gray-300 rounded-lg w-full py-2.5 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="fullName"
              className="block text-sm  font-semibold text-gray-800 mb-2"
            >
              Họ và tên
            </label>
            <Input
              name="fullName"
              register={register}
              type="text"
              errorMassage={errors.fullName?.message}
              placeholder="Họ và tên"
              defaultValue={user?.fullName || ""}
              disabled={false}
              className="border border-gray-300 rounded-lg w-full py-2.5 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block text-sm  font-semibold text-gray-800 mb-2"
            >
              Số điện thoại
            </label>
            <Input
              name="phone"
              register={register}
              type="number"
              errorMassage={errors.phone?.message}
              placeholder="Số điện thoại"
              defaultValue={user?.phone || ""}
              disabled={false}
              className="border border-gray-300 rounded-lg w-full py-2.5 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="address"
              className="block text-sm  font-semibold text-gray-800 mb-2"
            >
              Địa chỉ
            </label>
            <Input
              name="address"
              register={register}
              type="text"
              errorMassage={errors.address?.message}
              placeholder="Địa chỉ"
              defaultValue={user?.address || ""}
              disabled={false}
              className="border border-gray-300 rounded-lg w-full py-2.5 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <Button
              className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 flex justify-center items-center"
              type="submit"
              disabled={updateProfileByUser.isPending}
              isLoading={updateProfileByUser.isPending}
            >
              Cập nhật thông tin
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
