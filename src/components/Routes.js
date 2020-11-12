import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CakeDetail from 'pages/CakeDetail';
import Main from 'pages/Main';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/store/cake/:cakeId">
        <CakeDetail />
      </Route>
    </Switch>
  );
}

export default Routes;
