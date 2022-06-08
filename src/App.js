import './App.css';
import NavBar from './Components/NavBar'
import Header from './Components/Header';
import ItemListContainer from './Components/ItemListContainer';
import React from 'react';

function App() {
  const onAdd = (count) =>{
  }
  return (
    <>
        <NavBar />
        <Header />
        <div className="itemListContainer">
          <ItemListContainer />
        </div>
    </>
  );
}
export default App;
