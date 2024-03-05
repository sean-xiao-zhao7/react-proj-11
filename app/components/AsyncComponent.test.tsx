import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import AsyncComponent from "./AsyncComponent";

describe("Testing Async Component", () => {
    it("Renders no items initially", () => {
        render(<AsyncComponent />);

        const listItems = screen.findByRole("list");
        expect(listItems).toBeNull;

        const heading = screen.getByText("No items");
        expect(heading).toHaveRole("heading");
    });
});
