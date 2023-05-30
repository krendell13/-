import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from './Pages/HomePage';
import AboutPage from "./Pages/AboutPage";
import CoursesPage from "./Pages/CoursesPage";
import Prices from "./Pages/Prices";
import TimeTable from "./Pages/TimeTable";

function App() {
  return <Router>
       <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/courses' element={<CoursesPage />} />
        <Route path='/prices' element={<Prices />} />
        <Route path='/time' element={<TimeTable />} />
      </Routes>
    </Router>;
}

export default App;
