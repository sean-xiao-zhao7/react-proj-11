import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { jest } from "@jest/globals";

import AsyncComponent from "./AsyncComponent";

describe("Testing Async Component", () => {
    it("Renders no items initially", () => {
        (window.fetch as jest.Mock) = jest.fn();

        render(<AsyncComponent />);

        const listItems = screen.queryByRole("list");
        expect(listItems).toBeNull;

        const heading = screen.getByText("No items");
        expect(heading).toHaveRole("heading");
    });

    it("Renders a list after fetch completes", async () => {
        (window.fetch as jest.Mock) = jest.fn();

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
