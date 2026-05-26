import type { LoginRequest, LoginResponse } from "./types";
import { useApi } from "~/shared/api/http";

export const login = (body: LoginRequest) => {
  const api = useApi();
  const formData = new URLSearchParams({
    grant_type: "password",
    username: body.username,
    password: body.password,
    scope: "",
    client_id: "",
    client_secret: "",
  });
  return api<LoginResponse>("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
    },
    body: formData.toString(),
  });
};
