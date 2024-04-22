export interface Product {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
  quantity?: number;
}

export interface Confirmation {
  name: string;
  total: number;
}
