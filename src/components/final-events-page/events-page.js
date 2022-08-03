import LiveEvents from '../live-events/live_events';
import PastEvents from '../past-events/past_events';

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