import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePark1666750308436 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'parks',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'car_id',
                        type: 'varchar',
                    },
                    {
                        name: 'car_brand',
                        type: 'varchar',
                    },
                    {
                        name: 'car_model',
                        type: 'varchar',
                    },
                    {
                        name: 'car_color',
                        type: 'varchar',
                    },
                    {
                        name: 'departure_date',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'left_hour',
                        type: 'timestamp',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('parks');
    }
}
