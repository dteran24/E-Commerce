
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Store from './pages/Store';
import Login from './pages/Login';
import data from './data';
import { useState } from 'react';
import CartModal from './components/CartModal';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const { products } = data;

  const [cartItems, setCartItems] = useLocalStorage("cart", []);
  const [showModal, setShowModal] = useState(false);


  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
      cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        ));
    }
  }
  console.log(cartItems)
  return (
    <>
    <Router>
      <NavBar setShowModal={setShowModal} countCartItems={cartItems.length} isAuth={isAuth} setIsAuth={setIsAuth}/>

      <CartModal show={showModal}  handleClose={() => setShowModal(false)} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} isAuth={isAuth} setShowModal={setShowModal}/>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Store products={products} onAdd={onAdd} />}/>
        <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
     </Routes>
    </Router>
    </>
  );
}

export default App;
