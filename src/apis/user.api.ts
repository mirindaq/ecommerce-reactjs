import { SuccessUserList, User } from "../types/user.type";
import { getAccessTokenFromLocalStorage } from "../utils/auth";
import http from "../utils/http";
import { ProfileSchema } from "../utils/rules";
import { SuccessResponse } from "../utils/utils";

const userApi = {
  updateProfileByUser(body: ProfileSchema) {
    return http.put<SuccessResponse<User>>("/profile", body);
  },

  getAllEmployeeByAdmin() {
    const token = getAccessTokenFromLocalStorage();
    return http.get<SuccessUserList>("/admin/users/employees", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default userApi;
