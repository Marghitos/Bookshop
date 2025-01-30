import { utils } from "./utils";

class inventory {
    id: number;
    isbn: number;
    quantity: number;
    constructor(isbn: number, quantity: number) {
        this.id = utils.generateRandomNumber(13);
        this.isbn = isbn;
        this.quantity = quantity;
    }
}