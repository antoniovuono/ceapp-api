import request from 'supertest';
import { DataSource } from 'typeorm';
import { createConnection } from '../../../../../database';
import { app } from '../../../../../server/http/app';

let connection: DataSource;

const user = {
    name: 'user',
    email: 'user@example.com',
    password: 'password',
    cpf: '12323423',
};

describe('Authenticate User', () => {
    beforeAll(async () => {
        connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        await connection.dropDatabase();
        await connection.destroy();
    });

    it('Should be able to authenticate a user', async () => {
        await request(app).post('/users').send({
            name: user.name,
            email: user.email,
            password: user.password,
            cpf: user.cpf,
        });

        const authenticate = await request(app).post('/sessions').send({
            email: user.email,
            password: user.password,
        });

        expect(authenticate.status).toBe(201);
    });
});
