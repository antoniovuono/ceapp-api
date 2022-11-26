import { container } from 'tsyringe';

import { IDateProvider } from './DateProvider/IDateProvider';
import { DateProvider } from './DateProvider/implementations/DateProvider';
import { PriceCalculatorProvider } from './PriceCalculatorProvider/implementations/PriceCalculatorProvider';
import { IPriceCalculatorProvider } from './PriceCalculatorProvider/IPriceCalculatorProvider';

container.registerSingleton<IDateProvider>('DateProvider', DateProvider);
container.registerSingleton<IPriceCalculatorProvider>(
    'PriceCalculatorProvider',
    PriceCalculatorProvider,
);
