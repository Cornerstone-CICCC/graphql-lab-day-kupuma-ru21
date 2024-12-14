import { Product } from "../models/product.model";
import { CreateProductInput } from "../types/product";

const createProduct = async (data: CreateProductInput) => {
  try {
    return await Product.create(data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateProduct = async ({
  id,
  ...rest
}: { id: string } & CreateProductInput) => {
  try {
    return await Product.findOneAndUpdate({ _id: id }, rest);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteProduct = async ({ id }: { id: string }) => {
  try {
    await Product.findOneAndDelete({ _id: id });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getProducts = async () => {
  try {
    return await Product.find();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getProductById = async ({ id }: { id: string }) => {
  try {
    return await Product.findById(id);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const productController = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductById,
};
