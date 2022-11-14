import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from '../../../accounts/infra/entities/User';

@Entity('parks')
class Park {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    user_id: string;

    @Column()
    car_id: string;

    @Column()
    car_brand: string;

    @Column()
    car_model: string;

    @Column()
    car_color: string;

    @Column()
    departure_date: Date;

    @Column()
    left_date: Date;

    @Column()
    total_amount: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Park };
