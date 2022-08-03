import pic from "../../images/igem image.jpg";
import './past-events.css'

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

export default PastEvents