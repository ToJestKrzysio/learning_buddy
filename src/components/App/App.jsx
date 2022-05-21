import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Link to="/profile">Profile</Link>} />
                    <Route path="/profile" element={<Link to="/">Home</Link>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
