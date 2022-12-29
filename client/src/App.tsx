import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/home/Home";
import Game from './components/Game/Game';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={`/game/:id`} element={<Game />} />
          <Route path='*' element={<div className='container'>ERROR --</div>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
