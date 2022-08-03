//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Live_events from './components/live_events';
import Past_events from './components/past_events';
import Footer from './components/Footer';
function App() {
  const h =7
  return (
    <div className="App">

        <Header/>
        <Navbar/>

        <div className="live-events">
            <h1><i>Live Events</i></h1>
            <Live_events/>
            <Live_events/>
        </div>

        <div className="past-events">
          <h1><i>Past Events</i></h1>
              <Past_events/>
              <Past_events/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
