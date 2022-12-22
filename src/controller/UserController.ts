
import fetch from 'node-fetch';
import { Request, Response } from 'express';
import { User, GetUsersResponse} from '../model/User';

class UserController {

    static async getUsers(request: Request, response: Response) {
        try {
            const res = await fetch('https://reqres.in/api/users', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
    
            if (!res.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
    
            // const result: GetUsersResponse
            const result = (await res.json()) as GetUsersResponse;
            //console.log('result is: ', JSON.stringify(result, null, 4));
        
            response.status(200).json(result);

        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }
}

export { UserController }