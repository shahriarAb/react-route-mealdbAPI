import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "rgb(0, 180, 180)",
        textDecoration: "underline",
        backgronoundColor: "whitesmoke"
    }
    return (
        <div className="bg-gradient-to-r from-gray-600 to-gray-900 mb-4 p-4 text-right text-gray-200">
            <NavLink className="mr-4 font-semibold hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg" to="/home" activeStyle={activeStyle}>Home</NavLink>
            <NavLink className="mr-4 font-semibold hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg" to="/restaurent" activeStyle={activeStyle}>Restaurent</NavLink>
            <NavLink className="mr-4 font-semibold hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg" to="/aboutus" activeStyle={activeStyle}>About Us</NavLink>
            <NavLink className="mr-4 font-semibold hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg" to="">Login</NavLink>
            <NavLink className="mr-8 font-semibold hover:bg-gray-300 p-2 hover:text-gray-900 rounded-lg" to="">Sign up</NavLink>
        </div>
    );
};

export default Header;