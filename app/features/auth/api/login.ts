import type { LoginRequest, LoginResponse } from "./types";
import { useApi } from "~/shared/api/http";

export const login = (body: LoginRequest) => {
  const api = useApi();
  return api<LoginResponse>("/auth/login", {
    method: "POST",
    body: body,
  });
};
