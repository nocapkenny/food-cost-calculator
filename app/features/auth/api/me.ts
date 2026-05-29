import type { User } from "./types";
import { useApi } from "~/shared/api/http";

export const getMe = () => {
  const api = useApi();

  return api<User>("/users/profile");
};
