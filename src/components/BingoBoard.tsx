import React from "react";
import { BingoTile } from "./BingoTile";
import "./BingoBoard.css";

interface BingoBoardProps {
    tiles: string[];
    selectedTiles: string[]; //array of selected tiles
    setSelectedTiles: React.Dispatch<React.SetStateAction<string[]>>; //setter function
}

export function BingoBoard({ tiles, selectedTiles, setSelectedTiles }: BingoBoardProps) {
  // toggle logic here
  //value represents the tile being clicked
  
  const toggleTile = (value: string) => {
    //checks if tile is already in selectedTiles[]
    if (selectedTiles.includes(value)) {
        setSelectedTiles(selectedTiles.filter((v) => v !== value));
    } else {
        //Creates a new array without the clicked tile.
        setSelectedTiles([...selectedTiles, value]);
    }
  };

  //rendering board
  return (
    <div className="bingo-board">
        {/*tiles.map loops through each tile in array and reassigns */}
        {tiles.map((tile) => (
            <BingoTile
            key={tile}
            value={tile} //label
            isSelected={selectedTiles.includes(tile)}
            onClick={() => toggleTile(tile)}
            />
        ))}
    </div>
  );
}
