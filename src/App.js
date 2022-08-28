import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import HeroSection from "./MyComponents/HeroSection";
import CardItem from './MyComponents/CardItem';
import Service from "./MyComponents/Service";
import Product from "./MyComponents/Product";
import Cards from './MyComponents/Cards';
import { Switch } from 'react-router-dom';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";


function App() {

  return (
    <>
      <Router>
        <Header title="TRVL" searchbar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <HeroSection />
              </>
            )
          }}>
          </Route>
          <Route exact path="/service" render={() => {
            return (
              <>
                <Service />
              </>
            )

          }}>

          </Route>
          <Route exact path="/product" render={() => {
            return (
              <>
                <Product />
              </>
            )

          }}>

          </Route>
        </Switch>
         <Cards/>
        <Footer />

      </Router>
    </>



  );
}

export default App;
