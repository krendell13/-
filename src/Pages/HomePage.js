import React, { Component } from 'react';
import Header from "../Components/Header";
import Main from "../Components/Main";
import Popular from "../Components/Popular";
import Newsletter from "../Components/Newsletter";
import Welcome from "../Components/Welcome";
import Organization from "../Components/Organization";
import Ourpicked from "../Components/Ourpicked";
import Subscribe from "../Components/Subscribe";
import Contacts from "../Components/Contacts";
import Footer from '../Components/Footer';


export default class HomePage extends Component {
  componentDidMount() {
    const anchor = document.location.href;
    const blockID = anchor.split('#')[1];
    if (!blockID) {
      return
    }
    document.getElementById(blockID).scrollIntoView();
  }
  render() {
    
    return (
      <div>
      <Header />
      <Main />
      <Popular />
      <Newsletter />
      <Welcome />
      <Organization />
      <Ourpicked />
      <Subscribe />
      <Contacts />
      <Footer />
      </div>
    )
  }
}
