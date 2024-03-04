import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Home Page", () => {
    it("renders a heading", () => {
        render(<HomePage />);

        const heading = screen.getByRole("heading", { level: 1 });

        expect(heading).toBeInTheDocument();
    });

    it("renders HomePage unchanged", () => {
        const { container } = render(<HomePage />);
        expect(container).toMatchSnapshot();
    });
});
