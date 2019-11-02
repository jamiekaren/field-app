import React from 'react';
import Nav from "./components/Nav";
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Trainer from './pages/Trainer';
import Login from './components/Login/Login';
import './components/style/style.css'
import Slideshow from './pages/Lessons/Lessons';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Home} />
        <Route path="/trainer" component={Trainer} />
        <Route path="/slideshow" component={Slideshow} />
        <Route component={NotFound} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  )
}

export default App;
