/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/Navbar';
import AchievementsAndInteriit from './structured-page/achievements-page/final-achievements-page';
import Events_Page from './structured-page/events-page/events-page';
// structured-page/achievements-page/final-achievements-page
// structured-page/events-page/events-page
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <div>
            <Header/>
            <Navbar/>
          </div>

            <Routes>
              <Route path="/">
                  <Route path='events' element={<Events_Page/>} />
                  <Route path='achievements' element={<AchievementsAndInteriit/>} />
              </Route>
            </Routes>
          
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
