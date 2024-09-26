import Navbar from './components/Navbar'
import Home from './pages/Home'
import Play from './pages/Play'
import Book from './pages/Book'
import Learn from './pages/Learn'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>  
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Play' element={<Play />} />
            <Route path='/Book' element={<Book />} />
            <Route path='/Learn' element={<Learn />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
