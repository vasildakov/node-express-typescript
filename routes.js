"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = exports.index = void 0;
const AuthorRepository_1 = __importDefault(require("./model/AuthorRepository"));
const repository = new AuthorRepository_1.default();
function index(request, response) {
    response.status(200).send('Express + TypeScript Server');
}
exports.index = index;
function person(request, response) {
    try {
        response.setHeader('Content-Type', 'application/json');
        response.status(200);
        // throw new Error("The exception message")
        let id = Number(request.params.id);
        if (id) {
            response.json({ success: true, data: repository.find(id) });
        }
        else {
            response.json({ success: true, data: repository.findAll() });
        }
    }
    catch (e) {
        response.status(503).json({ success: false, error: e.message });
    }
}
exports.person = person;
