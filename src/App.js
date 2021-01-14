import React from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';
import Home from './routers/Home';
import About from './routers/About';
import Navigation from './components/Navigation';
import Detail from './routers/Detail';
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
      <Navigation />
      <Route path='/' exact={true} component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/movie/:id' component={Detail}></Route>
    </HashRouter>
  );
}

export default App;
