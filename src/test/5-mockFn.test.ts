// mock function : 테스트를 위해 만든 가짜 함수

// 배열 calls
// 1. 함수 호출 횟수 : length
// 2. 호출 시 전달된 인수 : [i]
const mockFn1 = jest.fn();

mockFn1();
mockFn1(1);

test("dd", () => {
  console.log(mockFn1.mock.calls);
  expect("dd").toBe("dd");
});

test("함수는 2번 호출됩니다.", () => {
  expect(mockFn1.mock.calls.length).toBe(2);
});

test("2번째로 호출된 함수에 전달된 첫번째 인수는 1 입니다", () => {
  expect(mockFn1.mock.calls[1][0]).toBe(1);
});

// forEachAdd1 : 숫자 배열을 반복하면서 +1 시킨 배열 리턴
const mockFn2 = jest.fn();

function forEachAdd1(arr) {
  arr.forEach((num) => {
    mockFn2(num + 1);
  });
}

forEachAdd1([10, 20, 30]);

test("함수 호출은 3번 됩니다", () => {
  expect(mockFn2.mock.calls.length).toBe(3);
});

test("전달된 값은 11, 21, 31 입니다.", () => {
  expect(mockFn2.mock.calls[0][0]).toBe(11);
  expect(mockFn2.mock.calls[1][0]).toBe(21);
  expect(mockFn2.mock.calls[2][0]).toBe(31);
});

// 1을 증가시키는 mock fn 만들기
const mockFn3 = jest.fn((num) => num + 1);

mockFn3(10);
mockFn3(20);
mockFn3(30);

test("함수 호출은 3번 됩니다", () => {
  console.log(mockFn3.mock.results); // [{type: 'return, value: 11}, {type: 'return, value: 21}, {type: 'return, value: 31}]
  expect(mockFn3.mock.calls.length).toBe(3);
});

test("10에서 1 증가한 값이 반환된다", () => {
  expect(mockFn3.mock.results[0].value).toBe(11);
});

test("20에서 1 증가한 값이 반환된다", () => {
  expect(mockFn3.mock.results[1].value).toBe(21);
});

test("30에서 1 증가한 값이 반환된다", () => {
  expect(mockFn3.mock.results[2].value).toBe(31);
});

// 실행 시 각각 다른 값 리턴하는 mock fn
const mockFn4 = jest.fn();

mockFn4
  .mockReturnValueOnce(10)
  .mockReturnValueOnce(20)
  .mockReturnValueOnce(30)
  .mockReturnValue(40);

test("dd", () => {
  console.log(mockFn4.mock.results);
  expect("dd").toBe("dd");
});

// 홀수만 리턴하는 mockFn
const mockFn5 = jest.fn();

mockFn5
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValue(true);

const result = [(1, 2, 3, 4, 5)].filter((num) => mockFn5(num));

test("홀수는 1, 3, 5", () => {
  expect(result).toStrictEqual([1, 3, 5]);
});

// 비동기 함수
const mockFn6 = jest.fn();

mockFn6.mockResolvedValue({ name: "Mick" });

test("받아온 이름은 Mike", () => {
  mockFn6().then((res) => {
    expect(res.name).toBe("Mike");
  });
});

// mocking module
// fn.createUser는 실제로 호출되지 않는다
const fn = require("./5-mockFn");

jest.mock("./5-mockFn.ts");

fn.createUser.mockReturnValue({ name: "Mike" });

test("유저를 만든다", () => {
  const user = fn.createUser("Mike");
  expect(user.name).toBe("Mike");
});

// toBeCalled, toBeCalledTimes(n), toBeCalledWith(n, m), lastCalledWith(n, m)
const mockFn7 = jest.fn();

mockFn7(10, 20);
mockFn7();
mockFn7(30, 40);

test("1번 이상 호출", () => {
  expect(mockFn7).toBeCalled();
});

test("정확히 3번 호출", () => {
  expect(mockFn7).toBeCalledTimes(3);
});

test("10, 20 전달받은 함수가 있는지", () => {
  expect(mockFn7).toBeCalledWith(10, 20);
});

test("마지막 함수는 30, 40 받았는지", () => {
  expect(mockFn7).lastCalledWith(30, 40);
});
