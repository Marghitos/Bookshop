"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class inventory {
    id;
    isbn;
    quantity;
    constructor(isbn, quantity) {
        this.id = utils_1.utils.generateRandomNumber(13);
        this.isbn = isbn;
        this.quantity = quantity;
    }
}
//# sourceMappingURL=inventory.js.map