import './App.css';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import NavBar from './Components/NavBar'
import React, { useEffect, useState } from 'react';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Home from './Components/Home';
import ItemListContainer from './Components/ItemListContainer';

import Cart from './Components/Cart';
import MyProvider from './Context/CartContext';
import Checkout from './Components/Checkout';
import Footer from './Components/Footer';



function App() {
  const [scrollHeight, setScrollHeight] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollHeight(position)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [scrollHeight])
  return (
    <>
    
       <BrowserRouter>
       <MyProvider>
       <NavBar isScrolling={scrollHeight}/>
       <Routes classname="app">
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
        </MyProvider>
        </BrowserRouter> 
        
    </>
  );
}
export default App
