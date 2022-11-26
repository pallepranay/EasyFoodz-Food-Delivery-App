import React, { Fragment} from 'react';
import './App.css'
import Home from "./components/home/Home"
import Firstpage from "./components/FirstPage"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"




function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Firstpage/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
