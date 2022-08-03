

const Navbar = () => {
  return (

  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Logo-Analytics CLub</a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">team</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Achievement</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Events</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Blogs</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
        </ul>
        </div>
    </div>
    
  </nav>

  )
}

export default Navbar