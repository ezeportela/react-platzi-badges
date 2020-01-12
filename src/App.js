import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BadgesContainer from './containers/Badges';
import BadgeNewContainer from './containers/BadgeNew';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/badges" component={BadgesContainer} />
      <Route exact path="/badges/new" component={BadgeNewContainer} />
    </Switch>
  </BrowserRouter>
);

export default App;
