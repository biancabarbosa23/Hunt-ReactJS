import React, { Component } from 'react';
import Routes from './routes'

import Main from './pages/main'
import Header from './components/Header'

import './style.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
