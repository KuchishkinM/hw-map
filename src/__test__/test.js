import ErrorRepository from '../app';

test('for error code in map', () => {
  const error = new ErrorRepository();
  const errorCode = 400;
  expect(error.translate(errorCode)).toBe('Bad Request');
});

test('for throw error', () => {
  const error = new ErrorRepository();
  const errorCode = 43434;
  expect(() => error.translate(errorCode)).toThrow();
});
