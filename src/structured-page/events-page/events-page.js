import pic from "../../images/igem image.jpg";
import './events-page-style.css'

// Past events component here

const PastEvents = () => {
  return (
    <div className="container container-past">
        <div className="row">

            <div className="col-lg">

                <div className="card">
                    <img src={pic} className="card-img-top" width="100%" alt=" "/>
                    <div className="card-body">
                        <h5 className="card-title">Event title</h5>
                        <p className="card-text">A brief explanation about past events and benefits of the event </p>
                        <a href="https://google.com" className="btn btn-primary">link to past event</a>
                    </div>
                </div>

            </div>

            <div className="col-lg">

                    <div className="card">
                        <img src={pic} className="card-img-top"  width="20%" alt=" "/>
                        <div className="card-body">
                            <h5 className="card-title">Event title</h5>
                            <p className="card-text">A brief explanation about past events and benefits of the event </p>
                            <a href="https://google.com" className="btn btn-primary">link to past event</a>
                        </div>
                    </div>
            </div>

            <div className="col-lg">

                    <div className="card">
                        <img src={pic} className="card-img-top" width="20%" alt=" "/>
                        <div className="card-body">
                            <h5 className="card-title">Event title</h5>
                            <p className="card-text">A brief explanation about past events and benefits of the event </p>
                            <a href="https://google.com" className="btn btn-primary">link to past event</a>
                        </div>
                    </div>               
            </div>

        </div>
    </div>
  )
}

// Live-events components here

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


// final implementation here

const Events_Page = () => {
  return (
    <div>
        <div className="live-events">
            <h1><i>Live Events</i></h1>
            <LiveEvents/>
            <LiveEvents/>
        </div>

        <div className="past-events">
          <h1><i>Past Events</i></h1>
              <PastEvents/>
              <PastEvents/>
        </div>
    </div>
  )
}

export default Events_Page