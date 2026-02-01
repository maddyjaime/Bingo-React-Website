// src/components/BingoTile.tsx
//import "./ItemTileTile.css";


interface ItemTileProps {
  value: string; //Ex: A1, A2, etc
  
}

export function ItemTile({value}: ItemTileProps) {
    return (
        <div>
                {value}

            <button>    
                Click Me

            </button>
        </div>

    )
}