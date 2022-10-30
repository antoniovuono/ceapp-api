import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin123',
    database: 'ceapp-api',
    entities: ['./src/modules/**/infra/entities/*.ts'],
    migrations: ['./src/database/migrations/*.ts'],
});

function createConnection(host = 'projects_database'): Promise<DataSource> {
    return AppDataSource.setOptions({ host }).initialize();
}

export { AppDataSource, createConnection };
