import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Train from '../Train/Train';
import Profile from '../Profile/Profile';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import useCookie from '../../hooks/useCookie';

function App() {
    const [cookie, setCookie] = useCookie('token_auth');

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<h1>home</h1>} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/train" element={<Train />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
