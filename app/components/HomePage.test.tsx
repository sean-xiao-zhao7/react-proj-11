import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

    it("renders unclicked test val to be False", () => {
        render(<HomePage />);

        const result = screen.getByText("Test val: False");

        expect(result).toBeInTheDocument();
    });

    it("renders clicked test val to be True", async () => {
        const user = userEvent.setup();
        render(<HomePage />);

        await user.click(screen.getByRole("button", { name: "Change test" }));

        const result = screen.getByText("Test val: True");

        expect(result).toBeInTheDocument();
    });
});
