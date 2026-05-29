export interface Business {
    id: number;
    name: string;
    slug: string;
    description: string;
    is_active: boolean;
    owner_id: number;
}

export interface BusinessCreate {
    name: string;
    description: string;
}

export interface BusinessError {
    detail: string;
}