
import request from "supertest";

import {index, person} from '../src/routes';
import app from "../src/app";


describe("get / ", () => {
    it("returns status code 200", async () => {
        const res = await request(app).get("/");
        
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Express + TypeScript Server');
    });
});

describe("get /authors", () => {
    it("it should return all authors", async () => {
        const res = await request(app).get("/authors");

        expect(res.body).toHaveProperty('authors');
        expect(res.statusCode).toEqual(200);
    });

    it("it should return author by id", async () => {
        const res = await request(app).get("/authors/1");

        expect(res.body).toHaveProperty('author');
        expect(res.statusCode).toEqual(200);
    });
});
