"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class UserController {
    static async getUsers(request, response) {
        try {
            const res = await (0, node_fetch_1.default)('https://reqres.in/api/users', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
            if (!res.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            // const result: GetUsersResponse
            // const result = (await res.json()) as GetUsersResponse;
            const result = await res.json();
            //console.log('result is: ', JSON.stringify(result, null, 4));
            response.status(200).json(result);
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }
}
exports.UserController = UserController;
