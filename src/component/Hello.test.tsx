import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

const user = {
  name: "Mike",
  age: 30,
};

const user2 = {
  age: 30,
};

// react-testing library
test("Hello 라는 글자가 포함되는가?", () => {
  render(<Hello user={user} />); // render를 통해 Hello 컴포넌트를 불러오고
  const helloEl = screen.getByText(/Hello/i); // 화면에서 글자를 가져옴
  expect(helloEl).toBeInTheDocument(); // 테스트 실행 : document안에 글자가 있는지
});

// jest snapshot
test("snapshot : name 있음", () => {
  const el = render(<Hello user={user} />);
  expect(el).toMatchSnapshot();
});

test("snapshot : name 없음", () => {
  const el = render(<Hello user={user2} />);
  expect(el).toMatchSnapshot();
});

/* snapshot 쓰는 이유
  복잡한 디자인이 있을 때 (색깔, 항목 개수 등) snapshot 활용 가능
  기획에 따라 ui가 계속 바뀌는 경우 비추 (매번 업데이트를 해줘야 함)
*/
