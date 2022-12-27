// 테스트 전후 helper 함수

const fn = require("./4-helperFn");

let num = 0;

// beforeEach() : 각 테스트 전에 실행된다
// afterEach() : 각 테스트 후에 실행된다

/* 
필요한 이유 
첫번째 case만 통과, 두번째 case는 실패
각 테스트를 초기화 하기 전에 num을 초기화 해야한다
*/

beforeEach(() => {
  num = 0;
});

afterEach(() => {
  num = 0;
});

test("0 + 1 = 1", () => {
  num = fn.add(num, 1);
  expect(num).toBe(1);
});

test("0 + 2 = 2", () => {
  num = fn.add(num, 2);
  expect(num).toBe(2);
});

// beforeAll, afterAll

// ex1. userDb
// 1. 테스트 전 : user db에 접속해 정보를 가져온다
// 2. 테스트 후 : db 커넥션을 끊는다
// 1번만 실행하고 싶을 때 -all 을 쓴다

let user;

beforeAll(async () => {
  user = await fn.connectUserDb();
});

afterAll(() => {
  return fn.disconnectDb();
});

test("이름은 Mike", () => {
  expect(user.name).toBe("Mike");
});

test("나이는 30", () => {
  expect(user.age).toBe(30);
});

test("성별은 남성", () => {
  expect(user.gender).toBe("male");
});

// ex2. carDb
// describe : 비슷한 내용들끼리 그룹화

describe("Car 관련 작업", () => {
  let car;

  beforeAll(async () => {
    car = await fn.connectCarDb();
  });

  afterAll(() => {
    return fn.disconnectCarDb();
  });

  test("이름은 z4", () => {
    expect(car.name).toBe("z4");
  });

  test("브랜드는 bmw", () => {
    expect(car.brand).toBe("bmw");
  });

  test("색상은 red", () => {
    expect(car.color).toBe("red");
  });
});

// describe 실행 순서
// describe 외부 > describe 내부
// beforeAll, beforeEach, test, afterEach, afterAll

// 특정 테스트만 단독 수행 : test.only
// 특정 테스트 넘기기 : test.only
// 테스트 코드 자체의 문제인지, 외부 요인 때문인지 판별 가능
test.only("0 + 5 = 5", () => {
  expect(fn.add(num, 5)).toBe(5);
});
