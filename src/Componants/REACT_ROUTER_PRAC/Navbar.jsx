import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" 
                         style={({ isActive }) => {
                            return { color: isActive ? "rgb(221, 74, 74)" : "black" };
                          }}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="/geturl">Get Url</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user">User List</NavLink>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar