'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
class Author {
    constructor(id, firstName, lastName, birthday) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
    getId() {
        return this.id;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getBirthday() {
        return this.birthday;
    }
}
exports.Author = Author;
