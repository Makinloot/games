import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Game from './components/Game';

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
