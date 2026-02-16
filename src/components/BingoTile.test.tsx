import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BingoTile } from "./BingoTile";

describe("BingoTile", () => {
  it("renders the tile value: A1", () => {
    render(<BingoTile value="A1" />);
    expect(screen.getByText("A1")).toBeInTheDocument();
  });

});