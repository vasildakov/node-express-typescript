'use strict';

export default interface Repository<T> {
    items: T[],
    find(id: number): T|null,
    findAll(): T[]
}
