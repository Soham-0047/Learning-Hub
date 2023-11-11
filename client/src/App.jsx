import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Navbar from './components/navbar/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>

  <Navbar/>
    <Routes>

        <Route path="/"element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>


    </Routes>
    </>
  )
}

export default App
