import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import "@testing-library/jest-dom";

describe("Home Page", () => {
    test("Renders Home Page with title 'Home Page'", () => {
        render(<HomePage />);
        const result = screen.getByText("Home Page");
        expect(result).toBeInTheDocument();
    });
});
