import { Customer } from "../models/customer.model";
import { Order } from "../models/order.model";
import { Product } from "../models/product.model";
import { CreateOrderInput } from "../types/order";

const createOrder = async (data: CreateOrderInput) => {
  try {
    const { id } = await Order.create(data);
    const product = await Product.findById(data.productId).exec();
    const customer = await Customer.findById(data.customerId).exec();
    return { id, product, customer };
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateOrder = async ({
  id,
  ...rest
}: { id: string } & CreateOrderInput) => {
  try {
    return await Order.findOneAndUpdate({ _id: id }, rest);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteOrder = async ({ id }: { id: string }) => {
  try {
    await Order.findOneAndDelete({ _id: id });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getOrders = async () => {
  try {
    return await Order.find();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getCustomersByProductId = async (productId: string) => {
  try {
    const ordersByProductId = await Order.find({ productId });
    const customersByProductId = [];
    for (const order of ordersByProductId) {
      const customer = await Customer.findById(order.customerId).exec();
      customersByProductId.push(customer);
    }
    return customersByProductId;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getProductsByCustomerId = async (customerId: string) => {
  try {
    const ordersByCustomerId = await Order.find({ customerId });
    const productsByCustomerId = [];
    for (const order of ordersByCustomerId) {
      const customer = await Customer.findById(order.customerId).exec();
      productsByCustomerId.push(customer);
    }
    return productsByCustomerId;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const orderController = {
  createOrder,
  updateOrder,
  deleteOrder,
  getOrders,
  getCustomersByProductId,
  getProductsByCustomerId,
};
