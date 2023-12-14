import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import RegistrationForm from './pages/RegistrationForm';
import "./App.css"

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/registration-form" element={<RegistrationForm />} />
          </Routes>
        </div>
      </>
    </Router>
  );
};

export default App;
