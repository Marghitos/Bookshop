import { Book } from '../src/models/book';

describe('Book', () => {
    it('should create a book instance with correct properties', () => {
        const book = new Book('1234567890', 'Test Title', 'Test Author', 29.99, 'Fiction');

        expect(book.isbn).toBe('1234567890');
        expect(book.title).toBe('Test Title');
        expect(book.author).toBe('Test Author');
        expect(book.price).toBe(29.99);
        expect(book.genre).toBe('Fiction');
    });
});