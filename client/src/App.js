import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Landing from './components/Landing/Landing';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
