import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CakeDetail from 'pages/CakeDetail';
import CakeSearch from 'pages/CakeSearch';
function Routes() {
  return (
    <Switch>
      <Route path="/store/cake/search">
        <CakeSearch />
      </Route>
      <Route path="/store/cake/:cakeId">
        <CakeDetail />
      </Route>
      

    </Switch>
  );
}

export default Routes;
