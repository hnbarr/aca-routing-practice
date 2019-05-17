import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import Home from './components/Home'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    );
  }
}

export default App;
