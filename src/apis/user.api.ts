import { User } from "../types/user.type";
import http from "../utils/http";
import { ProfileSchema } from "../utils/rules";
import { SuccessResponse } from "../utils/utils";

const userApi = {
  updateProfileByUser(body: ProfileSchema) {
    console.log(body);
    return http.put<SuccessResponse<User>>("/profile", body);
  },
};

export default userApi;
