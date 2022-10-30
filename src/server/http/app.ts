import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import '../../container';
import { router } from './routes';
import { AppError } from '../../errors/AppError';
import { createConnection } from '../../database';

const app = express();

app.use(express.json());

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: 'error',
            message: `Internal Server Error: ${err.message}`,
        });
    },
);

createConnection()
    .then(() => {
        console.log('Data source connected successfully');
    })
    .catch(error => {
        console.log(`Error connectin to database: ${error.message}`);
    });

export { app };
