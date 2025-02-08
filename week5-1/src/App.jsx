import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './Home'
import ProductDetail from './ProductDetail'
import Header from './components/Header'
import Cart from './Cart'
import { CartProvider } from './CartContext'

const App = () => {
  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        </Routes>
      </CartProvider>
    </>
  )
}

export default App