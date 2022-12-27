import { render } from "@testing-library/react";
import Timer from "./Timer";

// 시간에 따라 변하는 값은 테스트 이전에 mock 함수로 고정시킨다
test("초 표시", () => {
  Date.now = jest.fn(() => 123456789); // now 시간 고정
  const el = render(<Timer />);
  expect(el).toMatchSnapshot();
});
