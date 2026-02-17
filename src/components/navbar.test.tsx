import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route  } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { Navbar } from "./navbar";
import { ItemList } from "./ItemList";


// Hook to automatically log test names
beforeEach(() => {
  // Jest provides the current test name via expect.getState().currentTestName
  const currentTest = expect.getState().currentTestName;
  console.log(`\n🧪 Running test: ${currentTest}`);
});


describe("Navbar", () => {
    //Test that links render correctly
    it("has correct href for Overall Items", () => {
        render(
            <MemoryRouter>
            <Navbar />
            </MemoryRouter>
        );

        expect(screen.getByRole("link", { name: "Overall Items" })).toBeInTheDocument();

   

    });

});