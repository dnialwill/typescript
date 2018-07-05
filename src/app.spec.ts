import 'jest-extended';
import {Test} from "./app";

describe('Test Suite', () => {

    test('It should correctly instantiate.', () => {
        const instance = new Test();
        expect(instance).toBeDefined();
        expect(instance).toBeInstanceOf(Test);
    });

});