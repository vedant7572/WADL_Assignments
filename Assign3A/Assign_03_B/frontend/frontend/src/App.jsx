import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-lg p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
        <p className="mb-4">Please choose an option:</p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
            </li>
            <li>
              <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
