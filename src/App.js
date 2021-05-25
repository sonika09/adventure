import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import Services from './components/pages/Services';
import Signup from './components/pages/Signup';

function App() {
  return (
    <>
  <Router>
  <Navbar/>
  <Switch>
    <Route path="/" exact component={Home}></Route>
    <Route path="/services" component={Services}/>
    <Route path="/products" component={Product}/>
    <Route path="/sign-up" component={Signup}/>
  </Switch>
  </Router>
    </>
  );
}

export default App;
