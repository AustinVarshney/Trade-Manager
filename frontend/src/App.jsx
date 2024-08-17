import Navbar from "./Components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Signup from "./Pages/Signup/Signup"
import Products from "./Pages/Products/Products"
import Pricing from "./Pages/Pricing/Pricing"
import Support from "./Pages/Support/Support"
import Footer from "./Components/Footer/Footer"
import Login from "./Pages/Login/Login"

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
