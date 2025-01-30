"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./models/customer");
const order_1 = require("./models/order");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const readlineSync = __importStar(require("readline-sync"));
let name = readlineSync.question('Please enter your Name: ');
let email = readlineSync.question('Please enter your email: ');
let phoneNumber = readlineSync.question('Please enter yout phone number: ');
let address = readlineSync.question('Please enter your address: ');
console.log(name);
let customer = new customer_1.Customer(name, email, phoneNumber, address);
console.log("\nAvailable books:\n");
const booksDbPath = path.join(__dirname, "../db/books.json");
const rawData = fs.readFileSync(booksDbPath, "utf-8");
const data = JSON.parse(rawData);
console.log("Code".padEnd(5) + "Author".padEnd(20) + "Title".padEnd(30) + "Price".padEnd(10));
let counter = 0;
data.forEach(b => {
    console.log(counter.toString().padEnd(5) + b.author.padEnd(20) + b.title.padEnd(30) + b.price.toString().padEnd(10));
    counter++;
});
let shipmentPrice = 10;
let discountPrice = 5;
let order = new order_1.Order(discountPrice, shipmentPrice, customer);
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
//# sourceMappingURL=index.js.map