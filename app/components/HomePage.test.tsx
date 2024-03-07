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
        await waitFor(async () => {
            const heading = screen.getByRole("heading", { level: 1 });

            expect(heading).toBeInTheDocument();
        });
    });

    it("renders unclicked test val to be False", async () => {
        render(<HomePage />);
        await waitFor(async () => {
            const result = screen.getByText("Test val:");

            expect(result).toBeInTheDocument();
        });
    });

    it("does not render ChildPage1 if change test button is unclicked", async () => {
        render(<HomePage />);
        await waitFor(async () => {
            const result = screen.queryByRole("heading", {
                name: "ChildPage1",
            });

            expect(result).not.toBeInTheDocument();
        });
    });

    it("renders ChildPage1 after clicked change test button", async () => {
        const user = userEvent.setup();
        render(<HomePage />);

        await waitFor(async () => {
            await user.click(
                screen.getByRole("button", { name: "Change test" })
            );
            const result = screen.getByRole("heading", { name: "ChildPage1" });
            expect(result).toBeInTheDocument();
        });
    });
});
