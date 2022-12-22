import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import {index, person} from './routes';
import { AuthorController } from './controller/AuthorController';
import { UserController } from './controller/UserController';

dotenv.config();

const app: Express = express();

app.get('/', index); 
app.get('/authors/:id?', AuthorController.get);

app.get('/users', UserController.getUsers);

export default app;
