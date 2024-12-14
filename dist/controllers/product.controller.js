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
exports.productController = void 0;
const product_model_1 = require("../models/product.model");
const createProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield product_model_1.Product.create(data);
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
const updateProduct = (_a) => __awaiter(void 0, void 0, void 0, function* () {
    var { id } = _a, rest = __rest(_a, ["id"]);
    try {
        return yield product_model_1.Product.findOneAndUpdate({ _id: id }, rest);
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
const deleteProduct = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id }) {
    try {
        yield product_model_1.Product.findOneAndDelete({ _id: id });
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield product_model_1.Product.find();
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
const getProductById = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id }) {
    try {
        return yield product_model_1.Product.findById(id);
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.productController = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProducts,
    getProductById,
};
