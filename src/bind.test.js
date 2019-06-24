'use strict';

const bind = require('./bind');

describe('Basic scenario', () => {
  const f = (...args) => args;
  let device;
  const argsBase = [1, 2, 3];
  const argsExtra = [4, 5, 6];

  beforeEach(() => {
    device = bind(f, ...argsBase);
  });

  test('should return expected array', () => {
    expect(device())
      .toStrictEqual([1, 2, 3]);
  });

  test('should return expected array', () => {
    expect(device(...argsExtra))
      .toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should not change base and extra params', () => {
    expect(argsBase)
      .toStrictEqual([1, 2, 3]);
    expect(argsExtra)
      .toStrictEqual([4, 5, 6]);
  });
});

describe('Call bind without args', () => {
  const f = (...args) => args;
  let device;
  const argsExtra = [4, 5, 6];

  beforeEach(() => {
    device = bind(f);
  });

  test('should return expected array', () => {
    expect(device())
      .toStrictEqual([]);
  });

  test('should return expected array', () => {
    expect(device(...argsExtra))
      .toStrictEqual([4, 5, 6]);
  });

  test('should not change extra params', () => {
    expect(argsExtra)
      .toStrictEqual([4, 5, 6]);
  });
});
