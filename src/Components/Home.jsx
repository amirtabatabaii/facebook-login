import React, { Component } from "react";
import Facebook from "./Facebook";
import "./i18n";
import Detail from "./Translate/Detail";
import LanguageSelector from "./LanguageSelector";
import ScrollTest from "./ScrollTest";
import ReactPageScroller from "react-page-scroller";

class Home extends Component {
  render() {
    return (
      <>
        <div id='page-wrap' className='App'>
          <ReactPageScroller>
            <header className='App-header'>
              <LanguageSelector />
              <Detail />
              <Facebook />
            </header>
            <ScrollTest color='gray' />
            <ScrollTest color='white' />
          </ReactPageScroller>
        </div>
      </>
    );
  }
}
export default Home;
