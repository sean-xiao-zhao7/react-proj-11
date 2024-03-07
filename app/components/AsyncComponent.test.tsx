import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

import AsyncComponent from "./AsyncComponent";

describe("Testing Async Component", () => {
    beforeEach(() => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValue({
            json: async () => [1, 2, 3],
        });
    });

    it("Renders no items initially", async () => {
        render(<AsyncComponent />);

        const listItems = screen.queryByRole("list");
        expect(listItems).toBeNull;

        const heading = screen.getByText("No items");

        await waitFor(() => {
            expect(heading).toHaveRole("heading");
        });
    });

    it("Renders a list after fetch completes", async () => {
        render(<AsyncComponent />);

        const listItems = await screen.findAllByRole(
            "listitem",
            {},
            {
                timeout: 2000,
            }
        );
        expect(listItems).toHaveLength(3);
        const heading = screen.queryByText("No items");
        expect(heading).toBeNull;
    });
});
