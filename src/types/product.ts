export type ProductCategory =
  | "basket"
  | "cat"
  | "corporate"
  | "gift"
  | "cat flower";

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  alt: string;
  badge: "available" | "order";
  categories: ProductCategory[];
  active: "enable" | "disable";
}
