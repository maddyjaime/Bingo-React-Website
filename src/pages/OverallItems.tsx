import React from "react";
import { BingoBoard } from "../components/BingoBoard";
import { ItemList } from "../components/ItemList";

interface OverallItemsProps {
  list_of_tiles: string[];
  selectedTiles: string[];
  setSelectedTiles: React.Dispatch<React.SetStateAction<string[]>>;
}


export function OverallItems({list_of_tiles, selectedTiles, setSelectedTiles}: OverallItemsProps) {
  return (
    <>
        <div>
            <h1>Overall Items Page</h1>
            <p>This is the Overall Items page content.</p>
        </div>


        <h1>Bingo Below:</h1>
      
        <BingoBoard
          tiles={list_of_tiles}
          selectedTiles={selectedTiles}
          setSelectedTiles={setSelectedTiles}
        />


        <ItemList items={list_of_tiles} setSelectedTiles={setSelectedTiles}/>
    </>
    
  );
}