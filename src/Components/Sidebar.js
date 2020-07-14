import React from "react";
import { slide as Menu } from "react-burger-menu";
import Home from "./Translate/Home";
import About from "./Translate/About";
import Services from "./Translate/Services";
import ContactUs from "./Translate/ContactUs";

export default (props) => {
  return (
    <Menu {...props}>
      <a className='menu-item' href='/'>
        <Home />
      </a>

      <a className='menu-item' href='/about'>
        <About />
      </a>

      <a className='menu-item' href='/services'>
        <Services />
      </a>

      <a className='menu-item' href='/contact'>
        <ContactUs />
      </a>
    </Menu>
  );
};
