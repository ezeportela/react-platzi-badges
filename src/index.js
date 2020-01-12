import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import './global.css';

const container = document.getElementById('app');

ReactDOM.render(<Badge 
  firstName="Ezequiel"
  lastName="Portela"
  avatarUrl="https://s.gravatar.com/avatar/2e3fb6048f3fde366b52b85e79dea83e?size=496&default=retro"
  jobTitle="Fullstack Dev"
  twitter="eportela"
/>, container);
