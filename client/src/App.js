import React from 'react';
import Nav from "./components/Nav";
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';

import Home from './components/Home/Home';

import HelloWorld from './components/HelloWorld/HelloWorld';
import Slideshow from './pages/Lessons/Lessons';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/helloworld" component={HelloWorld} />
        <Route exact path="/lessons" component={Slideshow} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
