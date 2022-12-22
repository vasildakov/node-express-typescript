'use strict';

import { Author } from './Author';
import Repository from './Repository';

/* In memory author repository */
class AuthorRepository implements Repository<Author> {
    //items: Array<Author> = [
    items: Author[] = [
        new Author(1, 'Ernest', 'Hemingway', '21-Jul-1899'),
        new Author(2, 'John', 'Steinbeck', '27-Feb-1902'),
        new Author(3, 'Francis Scott Key', 'Fitzgerald', '24-Sep-1896'),
        new Author(4, 'Mark', 'Twain', '21-Apr-1910'),
        new Author(5, 'William', 'Faulkner', '25-Sep-1897'),
    ];

    // findAll(): Array<Person> {
    findAll(): Author[] {
        return this.items;
    }

    find(id: number): Author | null {
        let item = this.items.find(author => author.id === id);
        return (item instanceof Author) ? item : null;
    }
}

export default AuthorRepository;
