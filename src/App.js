import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import HomeContainer from './containers/Home';
import BadgesContainer from './containers/Badges';
import BadgeNewContainer from './containers/BadgeNew';
import NotFoundContainer from './containers/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/badges" component={BadgesContainer} />
        <Route exact path="/badges/new" component={BadgeNewContainer} />
        <Route component={NotFoundContainer} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
