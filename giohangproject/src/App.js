import React, { Component } from 'react';
import Header from './combonents/Header'
import Footer from "./combonents/Footer";
import Container from './combonents/Container'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Container />
        <Footer />
      </div>
    )
  };
}

export default App;
