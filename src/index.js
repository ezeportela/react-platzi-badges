import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import BadgeNewContainer from './containers/BadgeNew';

const container = document.getElementById('app');

ReactDOM.render(<BadgeNewContainer 
  firstName="Ezequiel"
  lastName="Portela"
  avatarUrl="https://s.gravatar.com/avatar/2e3fb6048f3fde366b52b85e79dea83e?size=496&default=retro"
  jobTitle="Fullstack Dev"
  twitter="eportela"
/>, container);
