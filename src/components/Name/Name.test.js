import { add } from './Name';
jest.mock('./Name', () => ({ add: jest.fn() }))

test('add', () => {
  
  // const add = jest.fn(() => 3);
  const plus = add(1, 2);
  expect(plus).toEqual(3);
  // expect(plus).toHaveBeenCalledTimes(1);
  // expect(plus).toHaveBeenCalledWith(1, 2);

});