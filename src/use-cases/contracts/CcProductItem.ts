export type CcProductItem = {
  name: string;
  brand: string;
  detail: string | null;
  brandImage: string | null;
  category: string;
  stock: number;
  price: number; 
  priceCC: number;
  initialPrice: number;
  image: string[];
  internetPrices: InternetProductItem[];
  internetPriceRange: string | null;
};

export type InternetProductItem = {
  shop: Shop;
  price: number;
};

export type Shop = {
  name: string;
  image: string;
}