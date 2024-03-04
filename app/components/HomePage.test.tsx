import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("Renders with text Home Page", () => {
    render(<HomePage />);
    screen.getByText("Home Page", { exact: true });
});
