'use strict';

const bind = require('./bind');

const f = (...args) => args;

const argsBase = [1, 2, 3];
const argsExtra = [4, 5, 6];

const device = bind(f, ...argsBase);
const device2 = bind(f);

test('Should return expected array', () => {
  expect(device())
    .toEqual([1, 2, 3]);
});

test('Should return expected array', () => {
  expect(device(...argsExtra))
    .toEqual([1, 2, 3, 4, 5, 6]);
});

test('Should return empty array if bind takes callback only', () => {
  expect(device2())
    .toEqual([]);
});
