export const usePageTitle = () => {
  const title = useState<string | null>("page:title", () => null);

  const setTitle = (value: string) => {
    title.value = value;
  };

  const clearTitle = () => {
    title.value = null;
  };

  return {
    title,
    setTitle,
    clearTitle,
  };
};
