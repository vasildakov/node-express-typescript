'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Author_1 = require("./Author");
/* In memory author repository */
class AuthorRepository {
    constructor() {
        //items: Array<Author> = [
        this.items = [
            new Author_1.Author(1, 'Ernest', 'Hemingway', '21-Jul-1899'),
            new Author_1.Author(2, 'John', 'Steinbeck', '27-Feb-1902'),
            new Author_1.Author(3, 'Francis Scott Key', 'Fitzgerald', '24-Sep-1896'),
            new Author_1.Author(4, 'Mark', 'Twain', '21-Apr-1910'),
            new Author_1.Author(5, 'William', 'Faulkner', '25-Sep-1897'),
        ];
    }
    // findAll(): Array<Person> {
    findAll() {
        return this.items;
    }
    find(id) {
        let item = this.items.find(author => author.id === id);
        return (item instanceof Author_1.Author) ? item : null;
    }
}
exports.default = AuthorRepository;
