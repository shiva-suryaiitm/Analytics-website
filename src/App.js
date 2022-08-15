/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import Footer from "./components/footer/Footer";
import Project from "./structured-page/Project/Project";
import Navbar from "./components/Navbar";
import AchievementsAndInteriit from "./structured-page/achievements-page/final-achievements-page";
import Events_Page from "./structured-page/events-page/events-page";
import Resource from "./structured-page/Resource/Resource";
import Team from "./structured-page/Team/Team";
import Blog from "./structured-page/Blog/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Navbar />
        </div>

        <Routes>
          <Route path="/">
            <Route path="events" element={<Events_Page />} />
            <Route path="achievements" element={<AchievementsAndInteriit />} />
            <Route path="projects" element={<Project />} />
            <Route path="resources" element={<Resource />} />
            <Route path="teams" element={<Team />} />
            <Route path="blogs" element={<Blog />} />
          </Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
