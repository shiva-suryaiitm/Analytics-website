/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Achievements from './components/achievement/achievements';
import Interiit from './components/inter-iit';
import Carousel from './components/carousel';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>

        <div className='box1'>
          <br></br>
          <h1><i>Achievements</i></h1>
            <div className="b-1">
              <Achievements/>
              <Achievements/>
            </div>
        </div>

        <div className='box2'>
          <br></br>
          <h1><i>Inter-IIT</i></h1>
          <div className="b-2">
                <div className='innercover-1'>
                <Carousel/>
                </div>
                <Interiit/>
          </div>
        </div>

      <Footer/>
    </div>
  );
}

export default App;
