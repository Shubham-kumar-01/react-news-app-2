// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import NewsDetails from './components/NewsDetails';

const App = () => {
  const [selects, setSelects] = useState('business'); // Initial category

  return (
    <Router>
      <Header selects={selects} setSelects={setSelects} />
      <Routes>
        <Route path="/" element={<Home selects={selects} />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
