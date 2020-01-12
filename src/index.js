import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import BadgeNewContainer from './containers/BadgeNew';
import BadgesContainer from './containers/Badges';


const container = document.getElementById('app');

ReactDOM.render(<BadgesContainer />, container);
