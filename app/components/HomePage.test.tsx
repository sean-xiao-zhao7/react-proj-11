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

    it("renders unclicked test val to be False", () => {
        render(<HomePage />);

        const result = screen.getByText("Test val:");

        expect(result).toBeInTheDocument();
    });

    it("does not render ChildPage1 if change test button is unclicked", () => {
        render(<HomePage />);

        const result = screen.queryByRole("heading", { name: "ChildPage1" });

        expect(result).not.toBeInTheDocument();
    });

    it("renders ChildPage1 after clicked change test button", async () => {
        const user = userEvent.setup();
        render(<HomePage />);

        await user.click(screen.getByRole("button", { name: "Change test" }));

        const result = screen.getByRole("heading", { name: "ChildPage1" });

        expect(result).toBeInTheDocument();
    });
});
