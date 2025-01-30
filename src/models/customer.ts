import { utils } from "./utils";

export class Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    constructor(name: string, email: string, phone: string, address: string) {
        this.id = utils.generateRandomNumber(10);
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}