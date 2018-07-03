export class Test {
    foo: string = "bar";

    /**
     * This is a test
     * @param bat - This is a test
     */
    bar(bat: string): string {
        bat = 'baz';
        return this.foo + bat;
    }
}