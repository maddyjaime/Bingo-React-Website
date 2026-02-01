//npm run dev

import { useLocalStorage } from "./hooks/useLocalStorage";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import './App.css'

import { Navbar } from "./components/navbar";
import { OverallItems } from "./pages/OverallItems";
import { BingoBoard } from "./components/BingoBoard";
import { ItemList } from "./components/ItemList";

import { Card } from './pages/Card';

function App() {
  
  const list_of_tiles = ["task1", "task2", "task3", "task4", "task5", "task6", "task7", "task8", "task9", "task10",
  "task11", "task12", "task13", "task14", "task15", "task16", "task17", "task18", "task19", "task20",
  "task21", "task22", "task23", "task24", "task25"];

  //keeps track of which tiles are selected 
  //useState returns an array of two elements:
  //    [value=[],       setterFunction] = useState(initialValue);
  const [selectedTiles, setSelectedTiles] = useLocalStorage<string[]>("selectedTiles", []);
  
  console.log("Selected Tiles:", selectedTiles);
  console.log("All Tiles:", list_of_tiles);
   



  return (
    <>
      
        <Navbar/>
           

        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/overall-items" element={
            <OverallItems 
                  list_of_tiles={list_of_tiles}
                  setSelectedTiles={setSelectedTiles} />} />

          <Route path="/card-1" element={
            <Card 
                  list_of_tiles={list_of_tiles}
                  selectedTiles={selectedTiles}
                  setSelectedTiles={setSelectedTiles} />} />
                  
          
          <Route path="/card-2" element={
            <Card 
                  list_of_tiles={list_of_tiles}
                  selectedTiles={selectedTiles}
                  setSelectedTiles={setSelectedTiles} />} />
        </Routes>
        
    
        
        
     
    </>
  )
}

export default App
