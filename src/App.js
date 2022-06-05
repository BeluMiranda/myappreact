import './App.css';
import NavBar from './Components/NavBar'
import ListItemContainer from './Components/ListItemContainer';
import Header from './Components/Header';
import ItemCount from './Components/ItemCount';
import React from 'react';

function App() {
  const onAdd = (count) =>{
    
  }
 
  return (
    <>
        <NavBar />
        <Header />
        <ListItemContainer greeting='Hola' />
        <ItemCount stock={5} initial = {1} onAdd={onAdd}/>
    </>
  );
}

export default App;
