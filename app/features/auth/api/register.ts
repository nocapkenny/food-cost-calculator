import type { RegisterRequest, LoginResponse } from "./types";
import { useApi } from "~/shared/api/http";

export const register = (body: RegisterRequest) => {
  const api = useApi();
  return api<LoginResponse>("/auth/register", {
    method: "POST",
    body: body,
  });
};
