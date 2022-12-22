"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorController = void 0;
const AuthorRepository_1 = __importDefault(require("../model/AuthorRepository"));
const repository = new AuthorRepository_1.default();
class AuthorController {
    static async get(request, response) {
        try {
            response.setHeader('Content-Type', 'application/json');
            response.status(200);
            // throw new Error("The exception message")
            let id = Number(request.params.id);
            if (id) {
                response.json({
                    success: true,
                    author: repository.find(id)
                });
            }
            else {
                response.json({
                    success: true,
                    authors: repository.findAll()
                });
            }
        }
        catch (e) {
            response.status(503).json({
                success: false,
                error: e.message
            });
        }
    }
}
exports.AuthorController = AuthorController;
