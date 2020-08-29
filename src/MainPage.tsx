import React from "react";
// import logo from './logo.svg';
import "./App.css";
import TopSection from "./sections/TopSection";

function MainPage() {
  return (
    <div className="App">
      <header>{/* <img src={logo} className="App-logo" alt="logo" /> */}</header>
      <TopSection />
    </div>
  );
}

export default MainPage;
