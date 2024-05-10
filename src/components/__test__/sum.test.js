import { sum } from "../sum";

test("Sum of two numbers are tested here", () => {
  const result = sum(5, 4);

  //Assertion
  expect(result).toBe(9);
});
