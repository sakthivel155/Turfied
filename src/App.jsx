import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Play from './pages/Play';
import Book from './pages/Book';
import Learn from './pages/Learn';
import NotFound from './pages/NotFound';
import Login from '../src/pages/Login';
import './App.css';

function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const toggleLogin = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <BrowserRouter>
      <Navbar toggleLogin={toggleLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Play' element={<Play />} />
        <Route path='/Book' element={<Book />} />
        <Route path='/Learn' element={<Learn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isLoginVisible && <Login onClose={toggleLogin} />}
    </BrowserRouter>
  );
}

export default App;