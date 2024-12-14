import { Product } from "./product";

export type CreateCustomerInput = {
  firstName: string;
  lastName: string;
  email: string;
};

export type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  products: Product[];
};
