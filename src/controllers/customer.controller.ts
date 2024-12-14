import { Customer } from "../models/customer.model";
import { CreateCustomerInput } from "../types/customer";

const createCustomer = async (data: CreateCustomerInput) => {
  try {
    return await Customer.create(data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateCustomer = async ({
  id,
  ...rest
}: { id: string } & CreateCustomerInput) => {
  try {
    return await Customer.findOneAndUpdate({ _id: id }, rest);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteCustomer = async ({ id }: { id: string }) => {
  try {
    await Customer.findOneAndDelete({ _id: id });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getCustomers = async () => {
  try {
    return await Customer.find();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getCustomerById = async ({ id }: { id: string }) => {
  try {
    return await Customer.findById(id);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const customerController = {
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomers,
  getCustomerById,
};
