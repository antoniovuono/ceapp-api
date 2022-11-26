import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { IDateProvider } from '../IDateProvider';

dayjs.extend(utc);

class DateProvider implements IDateProvider {
    currentDate(): Date {
        return dayjs().toDate();
    }

    convertToUtc(date: Date): string {
        return dayjs(date).utc().local().format();
    }

    compareHoursOfUse(departure_date: Date, left_date: Date): number {
        const departure_date_utc = this.convertToUtc(departure_date);
        const left_date_utc = this.convertToUtc(left_date);

        return dayjs(left_date_utc).diff(departure_date_utc, 'hours');
    }
}

export { DateProvider };
