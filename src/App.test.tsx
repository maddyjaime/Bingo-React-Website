import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route  } from "react-router-dom";
import { describe, it, expect } from "vitest";
import App from "./App";




it("renders ItemList when navigating to /overall-items", () => {
  render(
    <MemoryRouter initialEntries={["/overall-items"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("task1")).toBeInTheDocument();
});
