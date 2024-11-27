import { describe, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "@/app/(website)/(pages)/(home)/page";

describe("unit test UI", () => {
  test("example", () => {
    // ARRANGE

    render(<Page />);

    // ASSERT
    // expect(screen.getByRole("heading")).toHaveTextContent("heading");
  });
});
