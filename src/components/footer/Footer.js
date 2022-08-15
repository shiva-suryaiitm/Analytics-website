import './footer.css'
import img from '../../images/analytics club.jpg'

const Footer = () => {
    return (
      <footer className="footer-achievements">
          <div className="container">
            <br></br>

            <div className='row row-footer'>

              <div className="col-sm-2 col-1-footer-navbar unique-menu-col">
                <div className='nav-container'>
                <nav className ="navbar navbar-footer">
                  <ul className ="nav navbar-nav navbar-footer-menu">
                    <li className ="nav-item nav-item-footer nav-item-1">
                      <a className ="nav-link nav-link-footer" href="google.com"> Home </a>
                    </li>
                    <li className ="nav-item nav-item-footer nav-item-2">
                      <a className ="nav-link nav-link-footer" href="google.com"> Blogs </a>
                    </li>
                    <li className ="nav-item nav-item-footer nav-item-3">
                      <a className ="nav-link nav-link-footer" href="google.com"> AI state-of-art </a>
                    </li>
                    <li className ="nav-item nav-item-footer nav-item-4">
                      <a className ="nav-link nav-link-footer" href="google.com"> Contact </a>
                    </li>
                  </ul>
                </nav>
                </div>
              </div>

              <div className='col-sm-5 unique-social-media'>
                <div className='follow-us-container'>
                  <p className='follow-us'>Follow us on :</p>
                </div>
                <div className='media-links'>

                  <div className='footer-icons footer-icon-1'>
                    <a class="btn btn-primary" style={{BackgroundColor: '#dd4b39'}} href="#!" role="button">
                      <i class="fab fa-google"></i>
                    </a>
                  </div>

                  <div className='footer-icons footer-icon-2'>
                    <a class="btn btn-primary" style={{BackgroundColor: '#dd4b39'}} href="#!" role="button">
                      <i class="fab fa-google"></i>
                    </a>
                  </div>

                  <div className='footer-icons footer-icon-3'>
                    <a class="btn btn-primary" style={{BackgroundColor: '#dd4b39'}} href="#!" role="button">
                      <i class="fab fa-google"></i>
                    </a>
                  </div>

                  <div className='footer-icons footer-icon-4'>
                    <a class="btn btn-primary" style={{BackgroundColor: '#dd4b39'}} href="#!" role="button">
                      <i class="fab fa-google"></i>
                    </a>
                  </div>

                </div>
              </div>

              <div className='col-sm-5 unique-copyright'>
                <div className='copyright'>
                  <p className='fs-6 copyright-stat'>CopyRight &copy; Analytics club of IITM </p>
                  <img src={img} className="img-fluid border footer-end footer-img" width="10%" height="10%" alt=""/>
                </div>
              </div>

            </div>

          </div>
      </footer>
    )
  }
  
  export default Footer