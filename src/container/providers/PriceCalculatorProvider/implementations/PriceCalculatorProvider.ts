import { IPriceCalculatorProvider } from '../IPriceCalculatorProvider';

class PriceCalculatorProvider implements IPriceCalculatorProvider {
    calculatePrice(
        first_hour_amount: number,
        other_hours_amount: number,
        inUseHours: number,
    ): number {
        const total_in_use_hours = inUseHours;

        const totalOtherHoursPrice = total_in_use_hours * other_hours_amount;

        const total_price = totalOtherHoursPrice + Number(first_hour_amount);

        return total_price;
    }
}

export { PriceCalculatorProvider };
