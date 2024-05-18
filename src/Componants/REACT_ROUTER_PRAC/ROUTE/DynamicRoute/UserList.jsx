import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";


// Mock Data
const userData = {
    users: [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" },
    ],
};

export default function UserList() {
    const location = useLocation()
    console.log(location.pathname)
    return (
        <div>
            <h2>UserList</h2>
            <nav>
                <ul>
                    {userData.users.map((user) => (
                        <li key={user.id}>
                            <NavLink to={`/user/${user.id}`}>{user.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}