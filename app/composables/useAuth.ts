import { getMe } from "~/features/auth/api/me";
import { login } from "~/features/auth/api/login";
import { register } from "~/features/auth/api/register";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  User,
} from "~/features/auth/api/types";

const setAuthTokens = (tokens: LoginResponse) => {
  const accessToken = useCookie<string | null>("access_token", {
    sameSite: "lax",
  });
  const refreshToken = useCookie<string | null>("refresh_token", {
    sameSite: "lax",
  });

  accessToken.value = tokens.access_token;
  refreshToken.value = tokens.refresh_token;
};

export const useAuth = () => {
  const user = useState<User | null>("auth:user", () => null);
  const accessToken = useCookie<string | null>("access_token", {
    sameSite: "lax",
  });
  const refreshToken = useCookie<string | null>("refresh_token", {
    sameSite: "lax",
  });

  const clearAuth = () => {
    accessToken.value = null;
    refreshToken.value = null;
    user.value = null;
  };

  const fetchUser = async () => {
    if (!accessToken.value) {
      user.value = null;
      return null;
    }

    user.value = await getMe();

    return user.value;
  };

  const signIn = async (payload: LoginRequest) => {
    const tokens = await login(payload);
    setAuthTokens(tokens);

    return fetchUser();
  };

  const signUp = async (payload: RegisterRequest) => {
    const tokens = await register(payload);
    setAuthTokens(tokens);

    return fetchUser();
  };

  const logout = async () => {
    clearAuth();
    await navigateTo("/login");
  };

  return {
    user,
    accessToken,
    signIn,
    signUp,
    fetchUser,
    clearAuth,
    logout,
  };
};
