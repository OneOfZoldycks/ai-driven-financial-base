import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../src/App";

describe("App", () => {
  it("renders the dashboard header", () => {
    render(<App />);
    expect(screen.getByText("Available Balance")).toBeInTheDocument();
  });
});
