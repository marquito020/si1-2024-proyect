import useSWRMutation from "swr/mutation";

import { UserInfo } from "../interfaces/user.interface";
import {
  authLoginUrl,
  authRegisterUrl,
  login,
  registerNewUser,
} from "../services/auth.service";
import { Auth } from "../interfaces/auth.interface";

const useRegister = () => {
  const { trigger, isMutating, error } = useSWRMutation<
    UserInfo,
    string,
    string
  >(authRegisterUrl, registerNewUser);

  return { registerUser: trigger, isMutating, error };
};

const useLogin = () => {
  const { trigger, isMutating, error } = useSWRMutation<
    UserInfo,
    string,
    string,
    Auth
  >(authLoginUrl, login);

  return { loginUser: trigger, isMutating, error };
};

export { useRegister, useLogin };
