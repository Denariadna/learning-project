import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    const state: DeepPartial<StateSchema> = {
        counter: { value: 10 },
    };
    test('getCounterValue', () => {
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
