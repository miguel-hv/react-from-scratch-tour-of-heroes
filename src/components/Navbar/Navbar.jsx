import { Link } from "react-router-dom";
import "./Navbar.css";                    

const Navbar = () => {
    
    return(
        <div className="nav">
            <h1>Tour of Heroes</h1>
            <nav className="nav__links">
                <Link to="/" activeClassName="nav__links--activeLink"> Dashboard </Link>
                <Link to="/heroes" activeClassName="nav__links--activeLink"> Heroes </Link>
            </nav>
        </div>
    );
}

export default Navbar;