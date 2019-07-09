import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { browserHistory } from 'react-router'

class App extends Component {

  componentWillMount(){
    if(!localStorage.getItem("jwt"))
      browserHistory.push("/login")
  }
  render() {
    return (
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App;
