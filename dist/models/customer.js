"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const utils_1 = require("./utils");
class Customer {
    id;
    name;
    email;
    phone;
    address;
    constructor(name, email, phone, address) {
        this.id = utils_1.utils.generateRandomNumber(10);
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map