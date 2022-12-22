import { Request, Response } from 'express';
import AuthorRepository from '../model/AuthorRepository';

const repository = new AuthorRepository();

class AuthorController {

    static async get(request: Request, response: Response) {
        try {
            response.setHeader('Content-Type', 'application/json');
            response.status(200);
    
            // throw new Error("The exception message")
            let id: number = Number(request.params.id);

            if (id) {
                response.json({ 
                    success: true, 
                    author: repository.find(id) 
                });
                
            } else {
                response.json({ 
                    success: true, 
                    authors: repository.findAll() 
                });
            } 

        } catch (e: any) {
            response.status(503).json({ 
                success: false, 
                error: e.message 
            });
        }
    }
}

export { AuthorController }