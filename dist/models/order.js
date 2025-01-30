"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const fp_ts_1 = require("fp-ts");
const function_1 = require("fp-ts/function");
const utils_1 = require("./utils");
class Order {
    id;
    details;
    discountPrice;
    shipmentPrice;
    customer;
    constructor(discountPrice, shipmentPrice, customer) {
        this.id = 0;
        this.discountPrice = discountPrice;
        this.shipmentPrice = shipmentPrice;
        this.customer = customer;
        this.details = [];
    }
    AddOrder(isbn, quantity, price) {
        return (0, function_1.flow)(fp_ts_1.either.fromPredicate((quantity) => this.isInteger(quantity), () => "Error: Quantity must be an integer"), fp_ts_1.either.map(() => utils_1.utils.generateRandomNumber(10)), fp_ts_1.either.map((id) => {
            this.id = id;
            this.details.push([isbn, quantity, price]);
            return id;
        }))(quantity);
    }
    GetOrderDetails = () => this.details;
    GetTotal = () => this.details.reduce((total, book) => total + (book[1] * book[2]), 0) + this.shipmentPrice - this.discountPrice;
    isInteger = (value) => Math.floor(value) === value;
}
exports.Order = Order;
//# sourceMappingURL=order.js.map