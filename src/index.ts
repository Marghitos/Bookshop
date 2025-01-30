import { Customer } from "./models/customer";
import { Order } from "./models/order";
import * as path from "path";
import * as fs from "fs";
import { Book } from "./models/book";
import * as readlineSync from 'readline-sync';
import { cons } from "fp-ts/lib/ReadonlyNonEmptyArray";


let name = readlineSync.question('Please enter your Name: ');
let email = readlineSync.question('Please enter your email: ');
let phoneNumber = readlineSync.question('Please enter yout phone number: ');
let address = readlineSync.question('Please enter your address: ');
console.log(name);
let customer = new Customer(name, email, phoneNumber, address);

console.log("\nAvailable books:\n");
const booksDbPath = path.join(__dirname, "../db/books.json");
const rawData = fs.readFileSync(booksDbPath, "utf-8");
const data: Book[] = JSON.parse(rawData);
console.log("Code".padEnd(5) + "Author".padEnd(20) + "Title".padEnd(30) + "Price".padEnd(10));
let counter = 0;
data.forEach(b => {
    console.log(counter.toString().padEnd(5) + b.author.padEnd(20) + b.title.padEnd(30) + b.price.toString().padEnd(10));
    counter++;
});
let shipmentPrice = 10;
let discountPrice = 5;
let order = new Order(discountPrice, shipmentPrice, customer);
let choiche = 0;
do {
    choiche = parseInt(readlineSync.question('Please insert the code of the book: (-1 to exit)'), 10);
    if (choiche != -1) {
        let quantity = parseInt(readlineSync.question('How many? '), 10);
        let response = order.AddOrder(data[choiche].isbn, quantity, data[choiche].price);
        console.log(response);
    }
} while (choiche != -1);

console.log("----------------------------------------");
console.log("Order summary:\n");
console.log("ISBN".padEnd(20) + "Quantity".padEnd(10) + "Price".padEnd(10));
order.GetOrderDetails().forEach(orderDetail => {
    console.log(orderDetail[0].padEnd(20) + orderDetail[1].toString().padEnd(10) + orderDetail[2].toString().padEnd(10));
});
console.log("\nShipment price: " + shipmentPrice + "\n");
console.log("Discount price: " + discountPrice + "\n");
console.log("----------------------------------------");
console.log("Thank you " + customer.name + "!\n" + "Your order will be shipped to " + customer.address + "\n" + "Total $:" + order.GetTotal());

