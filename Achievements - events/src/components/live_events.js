
import pic from "../images/igem image.jpg";
const Live_events = () => {
  return (
        <div className="container live-container">
            <br></br>
            <div className="row">

                <div className="col-xl-auto">
                    <img src={pic} className="img-fluid rounded-3 border-bottom border-end" width="60%" alt=""/>
                </div>

                <div className="col col2">
                    <p className="fs-4">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
                    </p> 
                    <a href="https://google.com" className="link-info fs-3"> Hello Click here to go to the link </a>
                </div>

            </div>

        </div>
  )
}

export default Live_events