
import pic from "../../images/igem image.jpg";
import './live-events.css'

const LiveEvents = () => {
  return (
        <div className="container live-container">
            <br></br>
            <div className="row">

                <div className="col-xl-auto col-img-events-live">
                    <img src={pic} className="img-fluid rounded-3 border-bottom border-end" width="40%" alt=""/>
                </div>

                <div className="col col2">
                    <div className="live-events-desc">

                        <p className="fs-6 live-events-para">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
                        </p>
                        <p>
                            <a href="https://google.com" className="link-info fs-5"> Hello Click here to go to the link </a>
                        </p> 

                    </div>
                </div>

            </div>

        </div>
  )
}

export default LiveEvents