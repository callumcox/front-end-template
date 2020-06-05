import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from ".";

describe("<App>", () => {
  it("renders Hello there!", () => {
    const result = render(<App />);
    expect(result.getByText("Hello there!")).toBeInTheDocument();
  });
});
