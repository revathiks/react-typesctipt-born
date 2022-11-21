import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>           
            <Link to='/'>Home</Link>
            <Link to='/cart'>Mycart</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/signup'>Signup</Link>
        </div>
    )
}

export default Header;