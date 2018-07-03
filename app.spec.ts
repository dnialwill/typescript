import {Test} from './app';

test('It should return a string', () => {
    const instance = new Test();
    expect(typeof instance.bar('bar')).toBe('string');
});