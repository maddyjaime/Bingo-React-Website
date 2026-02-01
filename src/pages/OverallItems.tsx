import React from "react";
import { ItemList } from "../components/ItemList";

interface OverallItemsProps {
  list_of_tiles: string[];
  setSelectedTiles: React.Dispatch<React.SetStateAction<string[]>>;
}


export function OverallItems({list_of_tiles, setSelectedTiles}: OverallItemsProps) {
  return (
    <>
        <div>
            <h1>Overall Items Page</h1>
            <p>This is the Overall Items page content.</p>
        </div>


        <ItemList items={list_of_tiles} setSelectedTiles={setSelectedTiles}/>
    </>
    
  );
}