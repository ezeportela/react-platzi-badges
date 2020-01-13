import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import confLogo from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';

class Home extends Component {
  render() {
    return (
      <div className="full__container">
        <div className="container">
          <div className="Home__content">
            <div className="Home__left-box">
              <img src={confLogo} alt="Conf Logo" />
              <h1 className="pt-2">Print your badges</h1>
              <p className="pt-1 Home__subtitle">
                The easiest way to manage your conference
              </p>
              <Link to="/badges" className="btn btn-primary">
                Start now
              </Link>
            </div>
            <div className="Home__right-box">
              <img src={astronauts} alt="Astronauts" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
