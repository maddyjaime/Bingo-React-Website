import React from "react";
import { ItemTile } from "./ItemTile";
import "./BingoBoard.css";

interface ItemProps {
    items: string[];
    setSelectedTiles: React.Dispatch<React.SetStateAction<string[]>>; //setter function
}

export function ItemList({ items, setSelectedTiles }: ItemProps) {
  // toggle logic here
  //value represents the tile being clicked
  

  //rendering board
  return (
    <>


    <div className="item-list">
        {/*tiles.map loops through each tile in array and reassigns */}
        {items.map((item) => (
            <ItemTile
                key={item}
                value={item} //label
            />
        ))}
    </div>
    </>
  );
}
