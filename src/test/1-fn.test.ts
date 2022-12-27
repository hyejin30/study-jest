const fn = require("./1-fn");

test("1 = 1", () => {
  expect(1).toBe(1);
});

test("2 + 3 = 5", () => {
  expect(fn.add(2, 3)).toBe(5);
});

// fail
test("3 + 3 = 5", () => {
  expect(fn.add(3, 3)).toBe(5);
});

test("3 + 3 /= 5", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

/*
toBe : 숫자나 문자 등 기본 타입 값을 비교할 때 사용
not.ToBe : 반대
*/
