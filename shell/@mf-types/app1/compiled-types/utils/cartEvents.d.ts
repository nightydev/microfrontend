export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
}
export declare const addToCart: (product: Product) => void;
