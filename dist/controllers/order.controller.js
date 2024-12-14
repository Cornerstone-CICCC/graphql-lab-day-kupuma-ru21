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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const customer_model_1 = require("../models/customer.model");
const order_model_1 = require("../models/order.model");
const product_model_1 = require("../models/product.model");
const createOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = yield order_model_1.Order.create(data);
        const product = yield product_model_1.Product.findById(data.productId).exec();
        const customer = yield customer_model_1.Customer.findById(data.customerId).exec();
        return { id, product, customer };
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
const updateOrder = (_a) => __awaiter(void 0, void 0, void 0, function* () {
    var { id } = _a, rest = __rest(_a, ["id"]);
    try {
        return yield order_model_1.Order.findOneAndUpdate({ _id: id }, rest);
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
const deleteOrder = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id }) {
    try {
        yield order_model_1.Order.findOneAndDelete({ _id: id });
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
const getOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield order_model_1.Order.find();
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
const getCustomersByProductId = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ordersByProductId = yield order_model_1.Order.find({ productId });
        const customersByProductId = [];
        for (const order of ordersByProductId) {
            const customer = yield customer_model_1.Customer.findById(order.customerId).exec();
            customersByProductId.push(customer);
        }
        return customersByProductId;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
const getProductsByCustomerId = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ordersByCustomerId = yield order_model_1.Order.find({ customerId });
        const productsByCustomerId = [];
        for (const order of ordersByCustomerId) {
            const customer = yield customer_model_1.Customer.findById(order.customerId).exec();
            productsByCustomerId.push(customer);
        }
        return productsByCustomerId;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.orderController = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrders,
    getCustomersByProductId,
    getProductsByCustomerId,
};
