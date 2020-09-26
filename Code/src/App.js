import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Background from './Components/Background/Background';
import Gallery from './Components/Gallery/Gallery';
import Blog from './Components/Blog/Blog';
import Developer from './Components/Developer/Developer';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom'; 
import './App.css';
import BlogPage from './Components/BlogPage/BlogPage';

class App extends Component {
  state = {
    componentsToPrint : 0
  }

  value = (id) => {
    this.setState({
      componentsToPrint: id
    })
  }

  printing = () => {
    if(this.state.componentsToPrint === 0) {
      return (
        <div>
          <Gallery />
          <Blog printingvalue = {this.value}/>
          <Developer />
          <Footer />
        </div>
      );
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Background />
          <Route path = "/BlogPage" component = {BlogPage}/>
          {this.printing()}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
