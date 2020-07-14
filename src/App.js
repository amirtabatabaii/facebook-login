import React, { Suspense } from "react";
import "./App.css";

import "./Components/styles.css";
import SideBar from "./Components/Sidebar";

import Home from "./Components/Home";

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} right />
        <Home />
      </Suspense>
    </>
  );
}

export default App;
