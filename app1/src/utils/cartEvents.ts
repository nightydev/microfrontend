export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

export const addToCart = (product: Product) => {
  const event = new CustomEvent("addToCart", { detail: product });
  window.dispatchEvent(event);
};
