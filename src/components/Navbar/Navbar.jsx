import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ()=> {
    return(
        <nav>
            <NavLink exact to="/" activeClassName="active"> Dashboard </NavLink>
            <NavLink exact to="/heroes" activeClassName="active"> Heroes </NavLink>
        </nav>
    );
}

export default Navbar;