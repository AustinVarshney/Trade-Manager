import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Orders from './pages/Orders'
import Holdings from './pages/Holdings'
import Positions from './pages/Positions'
import Funds from './pages/Funds'
import Apps from './pages/Apps'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/holdings' element={<Holdings/>}/>
        <Route path='/positions' element={<Positions/>}/>
        <Route path='/funds' element={<Funds/>}/>
        <Route path='/apps' element={<Apps/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
