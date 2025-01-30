export class Book {
    isbn: string;
    title: string;
    author: string;
    price: number;
    genre: string;
    constructor(isbn: string, title: string, author: string, price: number, genre: string) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.price = price;
        this.genre = genre;
    }
}