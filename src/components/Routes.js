import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CakeDetail from 'pages/CakeDetail';

function Routes() {
  return (
    <Switch>
      <Route path="/store/cake/:cakeId">
        <CakeDetail />
      </Route>
    </Switch>
  );
}

export default Routes;
