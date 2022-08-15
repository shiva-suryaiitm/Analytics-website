/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

const Navbar = () => {

  return (

  <nav className="navbar navbar-expand-lg bg-dark navbar-dark navbar-top">
    
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Logo-Analytics CLub</a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav ms-auto outside-navbar-list">
            
            <li className="nav-item outside-navbar-item">
                <Link className="nav-link" to="/home">Home</Link>
            </li>

            <li className="nav-item outside-navbar-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item outside-navbar-item">
                <Link className="nav-link" to="/team">team</Link>
            </li>

            <li className="nav-item outside-navbar-item">
                <Link className="nav-link" to="/achievements">Achievement</Link>
            </li>

            <li className="nav-item outside-navbar-item">
                <Link className="nav-link" to="/events">Events</Link>
            </li>

            <li className="nav-item outside-navbar-item">
                <Link className="nav-link" to="/blogs">Blogs</Link>
            </li>

            <li className="nav-item outside-navbar-item">
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
        </ul>
        </div>
    </div>
    
  </nav>

  )
}

export default Navbar