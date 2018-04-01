import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// TODO: make sure to remove later // We may not need this because swipeable
// Remove Material UI
import MyNavbar from './components/my-navbar';
import Home from './components/home';
import AboutMe from './components/about-me';
import Projects from './components/project';
import Contacts from './components/contacts';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MyNavbar />
          <Route exact path="/" component={Home}></Route>
          <Route  path="/about-me" component={AboutMe}></Route>
        </div>
      </Router>
    );
  }
}