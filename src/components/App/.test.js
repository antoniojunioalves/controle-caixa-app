import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test('should render component', () => {
  const component = render(<App />);
  expect(component).toBeDefine;
})