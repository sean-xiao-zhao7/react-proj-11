import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("Renders with text Home Page", () => {
    render(<HomePage />);
    const result = screen.getByText("Home Page");
    expect(result).toBeInTheDocument();
});
