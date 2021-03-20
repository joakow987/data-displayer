import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthenticationLayout from './layout/authentication';
import BrowserLayout from './layout/browser';
import PageNotFound from './layout/pageNotFound';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AuthenticationLayout} />
        <Route exact path="/browser" component={BrowserLayout} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
