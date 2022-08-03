import pic from '../../images/analytics club.jpg'
import "./achievements-box-1.css"

const Achievements = () => {
  return (

    <div className="container border c1">

        <br></br>
        <div className='row'>

          <div className='col-lg-auto col1'>
          <img src={pic} className="img-fluid border border-end img-1 border-5" width="60%" alt=""/>
          </div>

          <div className='col col2'>
              <p className="fs-6 content-ach">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
              </p> 
              <a href="https://google.com" className="link-info fs-6 content-ach"> Hello Click here to go to the link ; place some link here </a>
          </div>

        </div>

    </div>

  )
}

export default Achievements