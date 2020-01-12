import React, { Component } from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNewContainer extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img src={header} alt="Logo" className="img-fluid"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName="Ezequiel"
                lastName="Portela"
                avatarUrl="https://s.gravatar.com/avatar/2e3fb6048f3fde366b52b85e79dea83e?size=496&default=retro"
                jobTitle="Fullstack Dev"
                twitter="eportela"
              />
            </div>

            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNewContainer;
