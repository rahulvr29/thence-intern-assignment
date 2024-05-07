import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import HomePage from './pages/HomePage';
import EntryFormPage from './pages/EntryFormPage';
import SucessPage from './pages/SucessPage';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/entry-form" element={<EntryFormPage/>} />
        <Route path="/form-success" element={<SucessPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
