
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './bootstrap.min.css'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import GravienceForm from './pages/GravienceForm'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/AboutUs' element={<Aboutus/>}></Route>
      <Route path='/ComplaintRegistration' element={<GravienceForm/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
