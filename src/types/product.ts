import { Customer } from "./customer";

export type CreateProductInput = {
  productName: string;
  productPrice: number;
};

export type Product = {
  id: string;
  productName: string;
  productPrice: number;
  customers: Customer[];
};
