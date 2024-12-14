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
exports.customerController = void 0;
const customer_model_1 = require("../models/customer.model");
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield customer_model_1.Customer.create(data);
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
const updateCustomer = (_a) => __awaiter(void 0, void 0, void 0, function* () {
    var { id } = _a, rest = __rest(_a, ["id"]);
    try {
        return yield customer_model_1.Customer.findOneAndUpdate({ _id: id }, rest);
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
const deleteCustomer = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id }) {
    try {
        yield customer_model_1.Customer.findOneAndDelete({ _id: id });
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
const getCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield customer_model_1.Customer.find();
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
const getCustomerById = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id }) {
    try {
        return yield customer_model_1.Customer.findById(id);
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.customerController = {
    createCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomers,
    getCustomerById,
};
