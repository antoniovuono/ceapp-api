export interface IParkDTO {
    id?: string;
    user_id: string;
    car_id: string;
    car_brand: string;
    car_model: string;
    car_color: string;
    left_date?: Date;
    total_amount?: number;
}
