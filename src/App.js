import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Footer from './components/footer';



function App() {
  return (
    <React.Fragment>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/services' component={Services}></Route>
        <Route path='/contact-us' component={Contact}></Route>
        <Route path='/sign-up' component={SignUp}></Route>
      </Switch>
      <Footer />
    </Router>
    </React.Fragment>
  );
}

export default App;


