import React, { Component } from "react";
import Facebook from "./Facebook";
import "./i18n";
import Detail from "./Translate/Detail";
import LanguageSelector from "./LanguageSelector";

class Home extends Component {
  render() {
    return (
      <div id='page-wrap' className='App'>
        <header className='App-header'>
          <LanguageSelector />
          <Detail />
          <Facebook />
        </header>
      </div>
    );
  }
}
export default Home;
