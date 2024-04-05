import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home/Home'
import Checkout from './pages/checkout/Checkout'
import Product from './pages/products/Product'
import Login from './pages/login/Login'
import Help from './pages/Help/Help'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar/>
          
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/aboutus' element={<Help/>}/>


        </Routes>
        <div>
          <Footer/>
        </div>
      </Router>
      
    </div>
  )
}

export default App
