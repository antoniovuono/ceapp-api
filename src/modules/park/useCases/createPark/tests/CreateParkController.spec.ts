import { DataSource } from 'typeorm';
import request from 'supertest';
import { createConnection } from '../../../../../database';
import { app } from '../../../../../server/http/app';

let connection: DataSource;

describe('Create Park', () => {
    beforeAll(async () => {
        connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        await connection.dropDatabase();
        await connection.destroy();
    });

    it('Should be able to create a new park', async () => {
        const response = await request(app).post('/park').send({
            car_id: 'MIJ-5594',
            car_brand: 'Subaru',
            car_model: 'Imprenza',
            car_color: 'Preto',
        });

        console.log(response);

        expect(response.status).toBe(201);
    });
});
