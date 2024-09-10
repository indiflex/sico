import { memoize } from './memoize';

describe('memoize', () => {
  test('memoizeAdd', () => {
    const memoizeAdd = memoize((a: number, b: number) => {
      return a + b;
    });

    expect(memoizeAdd(1, 2)).toBe(3);
    expect(memoizeAdd(3, 4)).toBe(7);
    expect(memoizeAdd(3, 4)).toBe(7);
    expect(memoizeAdd(1, 2)).toBe(3);
  });

  type NumtoNum = (n: number) => number;

  test('memoizeFactorial', () => {
    const memoizeFactorial: NumtoNum = memoize((n: number) => {
      if (n <= 1) return 1;

      return n * memoizeFactorial(n - 1);
    });

    expect(memoizeFactorial(3)).toBe(6);
    expect(memoizeFactorial(5)).toBe(120);
  });
});
