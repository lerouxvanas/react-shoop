import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.scss';
import HomePage from './routes/HomePage/HomePage';
import Navigation from './routes/Navigation/Navigation';
import Auth from './routes/Auth/Auth';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index={true} element={<HomePage />} />
                    <Route path="auth" element={<Auth />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
