import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import "@testing-library/jest-dom";

test("Renders with text Home Page", () => {
    render(<HomePage />);
    const result = screen.getByText("Home Page");
    expect(result).toBeInTheDocument();
});
