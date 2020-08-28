import React from 'react';
import './NavBar.css';
import {NavLink} from "react-router-dom";

const NavBar = () => (
    <>
        <div className="nav-block">
                <ul className="nav-links">
                    <li><NavLink exact to="/"
                                 activeStyle={{
                                     fontWeight: "bold",
                                     color: "FireBrick"
                                 }}>Home</NavLink></li>

                    <li><NavLink exact to="/posts"
                                 activeStyle={{
                                     fontWeight: "bold",
                                     color: "FireBrick"
                                 }}>Add</NavLink></li>

                    <li><NavLink exact to="/about"
                                 activeStyle={{
                                     fontWeight: "bold",
                                     color: "FireBrick"
                                 }}>About</NavLink></li>
                    <li><NavLink exact to="/contacts"
                                 activeStyle={{
                                     fontWeight: "bold",
                                     color: "FireBrick"
                                 }}>Contact</NavLink></li>
                </ul>
        </div>
    </>
);

export default NavBar;