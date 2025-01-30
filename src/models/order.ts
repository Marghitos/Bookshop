import { either as E } from "fp-ts";
import { flow } from "fp-ts/function";
import { utils } from "./utils";
import { Customer } from "./customer";

export class Order {
    id: number;
    details: [isbn: string, quantity: number, price: number][];
    discountPrice: number;
    shipmentPrice: number;
    customer: Customer;
    constructor(discountPrice: number, shipmentPrice: number, customer: Customer) {
        this.id = 0;
        this.discountPrice = discountPrice;
        this.shipmentPrice = shipmentPrice;
        this.customer = customer;
        this.details = [];
    }
    public AddOrder(isbn: string, quantity: number, price: number): E.Either<string, number> {
        return flow(
            E.fromPredicate(
                (quantity: number) => this.isInteger(quantity),
                () => "Error: Quantity must be an integer"
            ),
            E.map(() => utils.generateRandomNumber(10)),
            E.map((id: number) => {
                this.id = id;
                this.details.push([isbn, quantity, price]);
                return id;
            })
        )(quantity);
    }

    public GetOrderDetails = (): [isbn: string, quantity: number, price: number][] => this.details;

    public GetTotal = (): number => this.details.reduce((total, book) => total + (book[1] * book[2]), 0) + this.shipmentPrice - this.discountPrice;

    private isInteger = (value: number): boolean => Math.floor(value) === value;
}


