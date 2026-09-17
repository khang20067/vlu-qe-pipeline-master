const { login } = require('./auth');

test('Smoke Test: Dang nhap hop le', () => {
  expect(login('admin', '123')).toBe(true);
});
