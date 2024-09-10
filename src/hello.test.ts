import { sayHello } from './hello';

describe('hello', () => {
  test('sayHello', () => {
    expect(sayHello('Senior Indiflex Coding')).toBe(
      'Hello, Senior Indiflex Coding!'
    );
  });
});
