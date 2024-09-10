export function memoize<T extends (...args: Parameters<T>) => ReturnType<T>>(
  fn: T
) {
  const cacheTable: Record<string, any> = {};
  return (...args: Parameters<T>) => {
    const k = [...args].join();

    // to-test
    // if (cacheTable.hasOwnProperty(k)) {
    //   console.log('**************', args, k);
    //   return cacheTable[k];
    //   // return [cacheTable[k], true];
    // }
    // console.log('--------------', args, k);
    // return (cacheTable[k] = fn(...args));

    return cacheTable.hasOwnProperty(k)
      ? cacheTable[k]
      : (cacheTable[k] = fn(...args));
  };
}
