import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Facebook from "./Components/Facebook";
import "./Components/styles.css";
import SideBar from "./Components/Sidebar";

function App() {
  return (
    <>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} right />
      <div id='page-wrap' className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Facebook Auth Example</h1>
          <p>To get started, authenticate with Facebook.</p>
          <Facebook />
        </header>
      </div>
    </>
  );
}

export default App;
