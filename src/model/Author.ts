'use strict';

interface AuthorInterface {
    id: number;
    birthday: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    getId(): number,
    getFullName(): string,
    getBirthday(): string,
}

class Author implements AuthorInterface {
    id: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    birthday: string;

    constructor(
        id: number, 
        firstName: string, 
        lastName: string, 
        birthday: string
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }

    getId(): number {
        return this.id;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getBirthday(): string {
        return this.birthday;
    }
}

export  { Author, AuthorInterface };