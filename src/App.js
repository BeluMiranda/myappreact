import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar'
import React from 'react';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Home from './Components/Home';
import ItemListContainer from './Components/ItemListContainer';



function App() {
  const onAdd = (count) =>{
  }
  
  return (
    <>
       <BrowserRouter>
       <NavBar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
        </BrowserRouter> 
    </>
  );
}
export default App
