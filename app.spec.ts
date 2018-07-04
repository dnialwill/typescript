//TODO - Move setupTestFrameworkScriptFile config from package.json to jest.config.json when merging branch 'extend' into master
import 'jest-extended'
import {Test} from './app';

test('It should return a string', () => {
    const instance = new Test();
    expect(typeof instance.bar('bar')).toBe('string');
    expect([]).toBeEmpty();
    expect(1).toBe(1);
});