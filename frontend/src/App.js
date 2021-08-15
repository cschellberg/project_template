import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import './css/bootstrap.min.css';
import About from './components/about';
import Resume from './components/resume';
import Nav from './components/Navbar';
import Footer from './components/footer';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Test from './components/test';
import { Provider }  from 'react-redux';
import store  from './redux/store'

require('dotenv').config();

function App() {
    const path = require('path')
  return (
      <Provider store={store}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
            <Route exact path="/test" component={Test} />
        </Switch>
        <Footer/>
      </Router>
      </Provider>
  );
}

export default App;
