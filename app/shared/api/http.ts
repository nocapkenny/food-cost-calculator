export const useApi = () => {
  const config = useRuntimeConfig()

  return $fetch.create({
    baseURL: config.public.apiBase,
    onRequest({ options }) {
      const token = useCookie('access_token').value

      if (token) {
        options.headers = new Headers(options.headers)
        options.headers.set('Authorization', `Bearer ${token}`)
      }
    },
  })
}
