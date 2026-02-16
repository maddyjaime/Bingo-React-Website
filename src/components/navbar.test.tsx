import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route  } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { Navbar } from "./navbar";
import { ItemList } from "./ItemList";



describe("Navbar", () => {
    //Test that links render correctly
    it("has correct href for Overall Items", () => {
        render(
            <MemoryRouter>
            <Navbar />
            </MemoryRouter>
        );

        const link = screen.getByText("Overall Items");
        expect(link).toHaveAttribute("href", "/overall-items");
        });


   

});