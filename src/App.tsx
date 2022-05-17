import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.scss';
import HomePage from './routes/HomePage/HomePage';
import Navigation from './routes/Navigation/Navigation';
import Auth from './routes/Auth/Auth';
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout';
import Ofo from './components/Ofo/Ofo';
import PostsList from './components/PostsList/PostsList';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index={true} element={<HomePage />} />
                    <Route path="auth" element={<Auth />} />
                    <Route path="shop/*" element={<Shop />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route
                        path="ofo"
                        element={
                            <React.Fragment>
                                <Ofo />
                                <PostsList />
                            </React.Fragment>
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
