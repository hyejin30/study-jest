const fn = require("./1-fn");

// toBe
// toEqual
// toStrictEqual

/*
- 객체, 배열은 재귀적으로 돌면서 값을 확인하기 때문에 toStrictEqual 을 사용해야 한다.
- toEqual은 { .. gender : undefined } 를 거르지 못함
*/

test("2 + 3 = 5", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("2 + 3 = 5", () => {
  expect(fn.add(2, 3)).toEqual(5);
});

test("이름과 나이를 전달 받아 user 객체를 반환한다", () => {
  expect(fn.makeUser("Mike", 30)).toBe({
    name: "Mike",
    age: 30,
  });
});

test("이름과 나이를 전달 받아 user 객체를 반환한다", () => {
  expect(fn.makeUser("Mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
  });
});

// toBeNull
// toBeUndefined
// toBeDefined

test("null = null", () => {
  expect(null).toBeNull();
});

// toBeTruthy
// toBeFalsy

test("0 = false", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

test("비어있지 않은 문자열 = true", () => {
  expect(fn.add("hello", "world")).toBeTruthy();
});

// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLessThan 작다
// toBeLessThanOrEqual 작거나 같다
// toBeCloseTo 근사치
// ex : 사용자가 입력한 id 길이 제한, 업로드된 파일 크기가 적당한지

test("ID는 10자 이하여야 합니다.", () => {
  const id = "THE_BLACK_ORDER";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("비밀번호 4자리", () => {
  const pw = "1234";
  expect(pw.length).toBe(4); // toBe, toEqual
});

test("0.1 + 0.2 = 0.3", () => {
  expect(fn.add(0.1, 0.2)).toBe(0.3); // fail 소수를 2진법으로 바꾸면 무한소수가 되어 뒷자리를 절삭한다
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3); // success
});

// toMatch(정규표현식) 문자열 포함 여부
test("Hello World에 a 라는 글자가 있다", () => {
  expect("Hello World").toMatch(/a/); // fail
  expect("Hello World").toMatch(/H/); // success
  expect("Hello World").toMatch(/h/i); // success - 대소문자 구분 없애려면 i 붙이기
});

// toContain 배열에서 요소 포함 여부
test("유저 리스트에 Mike가 있다", () => {
  const user = "Mike";
  const userList = ["Tome", "Jane", "Kai"];
  expect(userList).toContain(user);
});

// 함수 실행 시 에러 발생 여부
test("에러 발생 하나요?", () => {
  expect(() => fn.throwErr()).toThrow(); // 모든 에러
  expect(() => fn.throwErr()).toThrow("xx"); // 특정 에러
});
