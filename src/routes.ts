
import express, { Request, Response } from 'express';

import PersonRepository from './model/AuthorRepository';

const repository = new PersonRepository();

function index(request: Request, response: Response)  {
    response.status(200).send('Express + TypeScript Server');
}

function person(request: Request, response: Response) {
    try {
        response.setHeader('Content-Type', 'application/json');
        response.status(200);

        // throw new Error("The exception message")
        let id: number = Number(request.params.id);
        
        if (id) {
            response.json({ success: true, data: repository.find(id) });
            
        } else {
            response.json({ success: true, data: repository.findAll() });
        } 
        
    } catch (e: any) {
        response.status(503).json({ success: false, error: e.message });
    }
}

export { index, person } 
