import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route  } from "react-router-dom";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

import App from "./App";


// Hook to automatically log test names
beforeEach(() => {
  // Jest provides the current test name via expect.getState().currentTestName
  const currentTest = expect.getState().currentTestName;
  console.log(`\n🧪 Running test: ${currentTest}`);
});


describe("App Routing and Navigation", () => {

    test("renders: home page by default", () => {
        render(
        <MemoryRouter initialEntries={["/"]}>
            <App />
        </MemoryRouter>
        );
        expect(screen.getByText("Home Page")).toBeInTheDocument();
    });

    test("renders: overall items", () => {
        render(
        <MemoryRouter initialEntries={["/overall-items"]}>
            <App />
        </MemoryRouter>
        );
        expect(screen.getByText("Overall Items Page")).toBeInTheDocument();
    });

    test("renders: card 1", () => {
        render(
        <MemoryRouter initialEntries={["/card-1"]}>
            <App />
        </MemoryRouter>
        );
        expect(screen.getByText("Card Page")).toBeInTheDocument();
    });

});
