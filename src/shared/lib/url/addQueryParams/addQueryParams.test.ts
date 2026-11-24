import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('test with two param', () => {
        const params = getQueryParams({
            test: 'value',
            hahaha: 'lox',
        });
        expect(params).toBe('?test=value&hahaha=lox');
    });
    test('test with undefined param', () => {
        const params = getQueryParams({
            test: 'value',
            ha: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
