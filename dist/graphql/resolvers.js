"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const customer_controller_1 = require("../controllers/customer.controller");
const order_controller_1 = require("../controllers/order.controller");
const product_controller_1 = require("../controllers/product.controller");
// Finish the resolvers
exports.resolvers = {
    Query: {
        products: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield product_controller_1.productController.getProducts();
        }),
        customers: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield customer_controller_1.customerController.getCustomers();
        }),
        orders: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield order_controller_1.orderController.getOrders();
        }),
        getProductById: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield product_controller_1.productController.getProductById(args);
        }),
        getCustomerById: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield customer_controller_1.customerController.getCustomerById(args);
        }),
    },
    Product: {
        customers: (_a) => __awaiter(void 0, [_a], void 0, function* ({ _id }) {
            return yield order_controller_1.orderController.getCustomersByProductId(_id);
        }),
    },
    Customer: {
        products: (_a) => __awaiter(void 0, [_a], void 0, function* ({ _id }) {
            return yield order_controller_1.orderController.getProductsByCustomerId(_id);
        }),
    },
    Order: {
        product: ({ product }) => {
            return product;
        },
        customer: ({ customer }) => {
            return customer;
        },
    },
    Mutation: {
        // Product
        addProduct: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield product_controller_1.productController.createProduct(args);
        }),
        editProduct: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield product_controller_1.productController.updateProduct(args);
        }),
        removeProduct: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield product_controller_1.productController.deleteProduct(args);
        }),
        // Customer
        addCustomer: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield customer_controller_1.customerController.createCustomer(args);
        }),
        editCustomer: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield customer_controller_1.customerController.updateCustomer(args);
        }),
        removeCustomer: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield customer_controller_1.customerController.deleteCustomer(args);
        }),
        // Order
        addOrder: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield order_controller_1.orderController.createOrder(args);
        }),
        editOrder: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield order_controller_1.orderController.updateOrder(args);
        }),
        removeOrder: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield order_controller_1.orderController.deleteOrder(args);
        }),
    },
};
