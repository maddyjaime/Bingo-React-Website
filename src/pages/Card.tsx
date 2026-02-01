import React from "react";
import { Navbar } from "../components/navbar";
import { BingoBoard } from "../components/BingoBoard";

interface CardProps {
  list_of_tiles: string[];
  selectedTiles: string[];
  setSelectedTiles: React.Dispatch<React.SetStateAction<string[]>>;
}

export function Card({list_of_tiles, selectedTiles, setSelectedTiles}: CardProps) {
  return (
    <>
        {/*<Navbar/> */}

        <div>
            <h1>Card Page</h1>
            <p>This is the Card page content.</p>
        </div>

        <h1>Bingo Below:</h1>
              
            <BingoBoard
                tiles={list_of_tiles}
                selectedTiles={selectedTiles}
                setSelectedTiles={setSelectedTiles}
            />

    </>
    
  );
}