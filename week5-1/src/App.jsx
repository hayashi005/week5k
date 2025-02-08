import Home from "./Home"
import Header from "./components/Header"
import ProductDetail from "./ProductDetail"
import { Routes, Route } from "react-router"
import './App.css'

function App() {
  

  return (
    <>
    <Header />
    <Routes>
    <Route index element={<Home />} />
    <Route path="/ProductDetail/:id" element={<ProductDetail />} />
    </Routes>
      
      
    </>
  )
}

export default App
