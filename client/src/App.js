import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Possibility, Feature, Whatbit, Header } from "./containers";
import { Brand, Navbar, Login } from "./components";
import "./App.css";
import Signup from "./components/login/signup";

const Homepage = () => {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatbit />
      <Feature />
      <Possibility />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
