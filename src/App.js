import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar'
import Header from './Components/Header';
import React from 'react';
import ItemDetailContainer from './Components/ItemDetailContainer';



function App() {
  const onAdd = (count) =>{
  }
  
  return (
    <>
       <BrowserRouter>
       <NavBar />
       <Header />
       <Routes>
        {/*<div className="itemListContainer">
          <ItemListContainer />
        </div>*/}
        <Route path='/' element={<ItemDetailContainer />} />
        </Routes>
        </BrowserRouter> 
    </>
  );
}
export default App
