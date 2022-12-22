import { Author } from "../src/model/Author";

const author = new Author(1, 'Ernest', 'Hemingway', '21-Jul-1899');

describe('Author', () => { 
    test('it should return the id', () => {
        expect(author.getId()).toBe(1);
    });

    test('it should return the full name', () => {
        expect(author.getFullName()).toBe('Ernest Hemingway');
    });

    test('it should return the birthday', () => {
        expect(author.getBirthday()).toBe('21-Jul-1899');
    });
});
