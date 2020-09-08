import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Background from './Components/Background/Background';
import Gallery from './Components/Gallery/Gallery';
import Blog from './Components/Blog/Blog';
import Developer from './Components/Developer/Developer';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Background />
      <Gallery />
      <Blog />
      <Developer />
      <Footer />
    </div>
  );
}

export default App;
