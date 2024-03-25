import { describe, expect, test } from '@jest/globals';
import { sum, createUser, fetchUser } from './utils';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('1+1 not equal 3', () => {
    expect(sum(1, 1)).not.toBe(3);
  });
  test('result should not be undefined', () => {
    expect(sum(1, 1)).not.toBe(undefined);
  });

  test('user should be John sebi', () => {
    expect(createUser()).toEqual({ firstName: 'John', lastName: 'Sebi' });
  });

  // async data axios
  test('user fecth', () => {
    // expect.assertions(1);
    return fetchUser().then((data) => {
      console.log('data:', data);
      expect(data).name.toEqual('asdfa');
    });
  });
});
