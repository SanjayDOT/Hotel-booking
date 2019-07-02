import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import './Components/Style.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    // <Slider />
    // <Image />
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <div>
          <Footer/>
        </div>
      </div>
    </Router>

  );
}

export default App;
