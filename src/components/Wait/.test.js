import React from "react";
import { render } from "@testing-library/react";
import Wait from "../Wait";

test('should render component', () => {
  const component = render(<Wait />)
  expect(component).toBeDefine;
})