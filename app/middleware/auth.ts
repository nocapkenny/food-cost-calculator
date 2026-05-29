export default defineNuxtRouteMiddleware(async () => {
  const { user, fetchUser, clearAuth } = useAuth();

  if (user.value) {
    return;
  }

  try {
    const currentUser = await fetchUser();

    if (currentUser) {
      return;
    }
  } catch {
    clearAuth();
  }

  return navigateTo("/login");
});
