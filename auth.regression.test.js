const { login } = require('./auth');

test('Regression Test: Sai mat khau', () => {
  expect(login('admin', 'wrong')).toBe(false);
});

test('Regression Test: De trong username', () => {
  expect(login('', '123')).toBe(false);
});

test('Regression Test: Mat khau co ky tu dac biet', () => {
  expect(login('admin', '@#$%')).toBe(false);
});
