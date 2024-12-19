import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Signup from "./Pages/Signup/Signup"
import Products from "./Pages/Products/Products"
import Pricing from "./Pages/Pricing/Pricing"
import Support from "./Pages/Support/Support"
import Footer from "./Components/Footer/Footer"
import Verification from "./Components/Verification/Verification"
import links from "../environment"

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const wsUrl = import.meta.env.REACT_APP_WS_URL || 'ws://localhost:8081';
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log('Message from server:', data);
        if (data.redirect) {
          window.location.href = `${links.dashboard}`;
        }
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    };
  
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    return () => {
      ws.close(); // Clean up the WebSocket connection when the component unmounts
    };
  }, [navigate]);

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
        <Route path="/verification" element={<Verification/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
