import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import InputContainer from './inputContainer/inputContainer'

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />
        <InputContainer />
      </main>
    );
  }
}

export default App;
