import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import HomePage from "./HomePage";

describe("Home Page", () => {
    beforeEach(() => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValue({
            json: async () => [1, 2, 3],
        });
    });

    it("renders a heading", async () => {
        render(<HomePage />);

        const heading = screen.getByRole("heading", { level: 1 });
        await waitFor(async () => {
            expect(heading).toBeInTheDocument();
        });
    });

    it("renders unclicked test val to be False", async () => {
        render(<HomePage />);

        const result = screen.getByText("Test val:");
        await waitFor(async () => {
            expect(result).toBeInTheDocument();
        });
    });

    it("does not render ChildPage1 if change test button is unclicked", async () => {
        render(<HomePage />);

        const result = screen.queryByRole("heading", {
            name: "ChildPage1",
        });
        await waitFor(async () => {
            expect(result).not.toBeInTheDocument();
        });
    });

    it("renders ChildPage1 after clicked change test button", async () => {
        const user = userEvent.setup();
        render(<HomePage />);

        await user.click(screen.getByRole("button", { name: "Change test" }));
        const result = screen.getByRole("heading", { name: "ChildPage1" });

        expect(result).toBeInTheDocument();
    });
});
