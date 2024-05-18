import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './ROUTE/Home'
import About from './ROUTE/About'
import Navbar from './Navbar'
import Service from './ROUTE/Service'
import NotFound from './ROUTE/NotFound'
import UserList from './ROUTE/DynamicRoute/UserList'
import UserProfile from './ROUTE/DynamicRoute/UserProfile'
import GetURL from './ROUTE/GetURL'

const ROUTER_ROOT = () => {
    
    return (
        <>

            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/user" element={<UserList />} />
                    <Route path="/geturl" element={<GetURL />} />
                    <Route path="/user/:userId" element={<UserProfile />} />
                    <Route path="/*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default ROUTER_ROOT