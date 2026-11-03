import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'admin',
    age: 22,
    city: 'Moscow',
    country: Country.Belarus,
    first: 'Арина',
    lastname: 'Денисова',
    currency: Currency.RUB,
};

describe('validateProfileData', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first name', async () => {
        const result = validateProfileData({
            ...data,
            first: '',
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('without country', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
    test('without country and age', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
            age: undefined,
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
