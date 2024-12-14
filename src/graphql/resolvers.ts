import { customerController } from "../controllers/customer.controller";
import { orderController } from "../controllers/order.controller";
import { productController } from "../controllers/product.controller";
import { CreateCustomerInput, Customer } from "../types/customer";
import { CreateOrderInput } from "../types/order";
import { CreateProductInput, Product } from "../types/product";

// Finish the resolvers
export const resolvers = {
  Query: {
    products: async () => {
      return await productController.getProducts();
    },
    customers: async () => {
      return await customerController.getCustomers();
    },
    orders: async () => {
      return await orderController.getOrders();
    },
    getProductById: async (_: unknown, args: { id: string }) => {
      return await productController.getProductById(args);
    },
    getCustomerById: async (_: unknown, args: { id: string }) => {
      return await customerController.getCustomerById(args);
    },
  },
  Product: {
    customers: async ({ _id }: { _id: string }) => {
      return await orderController.getCustomersByProductId(_id);
    },
  },
  Customer: {
    products: async ({ _id }: { _id: string }) => {
      return await orderController.getProductsByCustomerId(_id);
    },
  },
  Order: {
    product: ({ product }: { product: Product }) => {
      return product;
    },
    customer: ({ customer }: { customer: Customer }) => {
      return customer;
    },
  },
  Mutation: {
    // Product
    addProduct: async (_: unknown, args: CreateProductInput) => {
      return await productController.createProduct(args);
    },
    editProduct: async (
      _: unknown,
      args: { id: string } & CreateProductInput
    ) => {
      return await productController.updateProduct(args);
    },
    removeProduct: async (_: unknown, args: { id: string }) => {
      return await productController.deleteProduct(args);
    },
    // Customer
    addCustomer: async (_: unknown, args: CreateCustomerInput) => {
      return await customerController.createCustomer(args);
    },
    editCustomer: async (
      _: unknown,
      args: { id: string } & CreateCustomerInput
    ) => {
      return await customerController.updateCustomer(args);
    },
    removeCustomer: async (_: unknown, args: { id: string }) => {
      return await customerController.deleteCustomer(args);
    },
    // Order
    addOrder: async (_: unknown, args: CreateOrderInput) => {
      return await orderController.createOrder(args);
    },
    editOrder: async (_: unknown, args: { id: string } & CreateOrderInput) => {
      return await orderController.updateOrder(args);
    },
    removeOrder: async (_: unknown, args: { id: string }) => {
      return await orderController.deleteOrder(args);
    },
  },
};
