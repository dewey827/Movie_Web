import React from 'react';
//Router 관련 -react-router-dom"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';

import Login from './pages/Login/Login';


const Router = () => {
    return(
        <BrowserRouter>
            <Nav />

            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='*' element={<div>찾으시는 창이 없네요.</div>} />
                <Route path='/login' element={<Login />} />

            </Routes>
            <Footer />


        </BrowserRouter>
    );
};
export default Router;