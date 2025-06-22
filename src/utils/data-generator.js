import { faker } from '@faker-js/faker';
import { v4 as uuid } from 'uuid';

export const createUser = () => ({
    username: `${faker.internet.userName()}_${uuid().slice(0, 6)}`,
    password: faker.internet.password({ length: 12, memorable: true }),
    email: faker.internet.email(),
});

export const createOrderData = () => ({
    name: faker.person.fullName(),
    country: faker.location.country(),
    city: faker.location.city(),
    card: faker.finance.creditCardNumber('visa'),
    month: faker.date.month({ abbreviated: true }),
    year: String(faker.date.future().getFullYear()),
});