import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar" role="navigation">
    <NavLink to="/" end>
      Home
    </NavLink>
    <NavLink to="/actors">Actors</NavLink>
    <NavLink to="/directors">Directors</NavLink>
  </div>
    );
};

export default NavBar;
