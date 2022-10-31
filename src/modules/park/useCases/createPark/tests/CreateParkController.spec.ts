import request from 'supertest';
import { DataSource } from 'typeorm';
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

        expect(response.status).toBe(201);
    });

    it('Not Should be able to create a new park with a parked car', async () => {
        const park = await request(app).post('/park').send({
            car_id: 'MIJ-5594',
            car_brand: 'Subaru',
            car_model: 'Imprenza',
            car_color: 'Preto',
        });

        expect(park.status).toBe(400);
    });
});
