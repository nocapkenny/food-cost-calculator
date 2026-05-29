import {
  getBusinesses,
  createBusiness,
} from "~/features/business/api/business";
import type { Business, BusinessCreate, BusinessError } from "~/features/business/api/types";
import { FetchError } from "ofetch";

export const useBusiness = () => {
  // region STATE
  const businesses = useState<Business[]>("businesses", () => []);
  const currentBusiness = useState<Business | null>("business", () => null);
  const businessError = useState<string>("businessError", () => "");
  const isAddNewBusiness = useState<boolean>("isAddNewBusiness", () => false);
  const isBusinessesLoaded = useState<boolean>("businesses:loaded", () => false);

  // region COMPUTED
  const hasBusinesses = computed(() => businesses.value.length > 0);

  // region FUNCTIONS
  const fetchBusinesses = async () => {
    try {
      const data: Business[] = await getBusinesses();
      businesses.value = data;
      const lastBusiness = businesses.value.at(-1);

      if (lastBusiness) {
        currentBusiness.value = lastBusiness;
      }
    } catch (error) {
      console.error(error);
    } finally {
      isBusinessesLoaded.value = true;
    }
  };

  const postBusiness = async (body: BusinessCreate) => {
    try {
      await createBusiness(body);
      await fetchBusinesses();
      businessError.value = '';
    } catch (error) {
      console.error(error);

      if (error instanceof FetchError) {
        const data = error.data as BusinessError;

        if (typeof data?.detail === "string") {
          businessError.value = data.detail;
        }
      }
    }
  };


  return {
    businesses,
    currentBusiness,
    hasBusinesses,
    isAddNewBusiness,
    isBusinessesLoaded,
    fetchBusinesses,
    postBusiness,
    businessError
  };
};
