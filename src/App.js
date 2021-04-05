import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import MyNav from './components/navbar/MyNav';
import Details from './components/pages/Details';

const App = () => {
  return (
    <Router>
      <MyNav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/details:id/' component={Details} />
      </Switch>
    </Router>
  );
};

export default App;
