import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Menu from './pages/menu'; 
import Aboutus from './pages/aboutus';
import Home from './pages/Home';
import Forms from './components/Forms';
import Profile from './pages/Profile';

export const AppContext = createContext();

const App = () => {
  const [username, setUsername] = useState('Disha');

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/Forms" element={<Forms />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default App;
