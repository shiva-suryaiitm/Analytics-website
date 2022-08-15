/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import Header from "./header/Header";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark navbar-top">
      <div className="container-fluid">
        <a className="navbar-brand my-auto" href="#">
          <Header />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav outside-navbar-list">
            <li className="nav-item outside-navbar-item">
              <Link className="nav-link" to="/blogs">
                Blog
              </Link>
            </li>

            <li className="nav-item outside-navbar-item">
              <Link className="nav-link" to="/teams">
                Team
              </Link>
            </li>

            <li className="nav-item outside-navbar-item">
              <Link className="nav-link" to="/achievements">
                Achievement
              </Link>
            </li>

            <li className="nav-item outside-navbar-item">
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>

            <li className="nav-item outside-navbar-item">
              <Link className="nav-link" to="/resources">
                Resources
              </Link>
            </li>

            <li className="nav-item outside-navbar-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
