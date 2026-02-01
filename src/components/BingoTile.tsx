// src/components/BingoTile.tsx
import "./BingoTile.css";

interface BingoTileProps {
  value: string; //Ex: A1, A2, etc
  isSelected?: boolean; // optional prop for marking the tile
  onClick?: () => void; // optional click handler
}

export function BingoTile({ value, isSelected, onClick }: BingoTileProps) {
  return (
    <div
    /*terinary: if isSelected=true, add 'selected' class to colorize CSS*/
      className={`bingo-tile ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      {value}
    </div>
  );
}
