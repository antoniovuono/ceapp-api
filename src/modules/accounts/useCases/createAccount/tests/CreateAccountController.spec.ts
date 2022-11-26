import request from 'supertest';
import { DataSource } from 'typeorm';
import { createConnection } from '../../../../../database';
import { app } from '../../../../../server/http/app';

let connection: DataSource;

describe('Create User', () => {
    beforeAll(async () => {
        connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        await connection.dropDatabase();
        await connection.destroy();
    });

    it('Should be able to create a new user', async () => {
        const response = await request(app).post('/users').send({
            name: 'User Test',
            email: 'user@example.com',
            password: '1234',
            cpf: '39837363536',
        });

        expect(response.status).toBe(201);
    });
});
