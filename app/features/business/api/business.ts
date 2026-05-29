import type { Business, BusinessCreate } from "./types";
import { useApi } from "~/shared/api/http";

export const getBusinesses = () => {
    const api = useApi();
    
    return api<Business[]>("/businesses/");
}

export const createBusiness = (body: BusinessCreate) => {
    const api = useApi();

    return api<Business[]>("/businesses/", {
        method: 'POST',
        body: body,
    })
}
