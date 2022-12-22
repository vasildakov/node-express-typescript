"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const AuthorController_1 = require("./controller/AuthorController");
const UserController_1 = require("./controller/UserController");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get('/', routes_1.index);
app.get('/authors/:id?', AuthorController_1.AuthorController.get);
app.get('/users', UserController_1.UserController.getUsers);
exports.default = app;
