const fn = require("./2-asyncFn");

// 1. 콜백 패턴

// done이 호출되어야 test가 종료된다
test("3초 후에 받아온 이름 = Mike", (done) => {
  function callback(name) {
    expect(name).toBe("Mike");
    done();
  }
  fn.getName(callback);
});

// 에러 핸들링
test("3초 후에 받아온 이름 = Mike", (done) => {
  function callback(name) {
    try {
      expect(name).toBe("Mike");
      done();
    } catch (error) {
      done();
    }
  }
  fn.getName(callback);
});

// 2. Promise

// promise를 넘겨주면 jest는 resolve 될 때까지 기다려준다
// promise를 넘겨주면 반드시 return 필요

test("3초 후에 받아온 나이 = 30", () => {
  return fn.getAge().then((age) => {
    expect(age).toBe(30);
  });
});

// 3. Promise - resolves, rejects (matcher)

test("3초 후에 받아온 나이 = 30", () => {
  return expect(fn.getAge()).resolves.toBe(30);
});

test("3초 후에 받아온 나이 = 30", () => {
  return expect(fn.getAge()).rejects.toBe(30);
});

test("3초 후에 에러 발생", () => {
  return expect(fn.getAge()).rejects.toMatch("error");
});

// 4. async await

// 기본
test("3초 후에 받아온 나이 = 30", async () => {
  const age = await fn.getAge();
  expect(age).toBe(30);
});

// resolves matcher 사용
test("3초 후에 받아온 나이 = 30", async () => {
  await expect(fn.getAge()).resolves.toBe(30);
});
