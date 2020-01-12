import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import data from '../db.json';
import confLogo from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import BadgesList from '../components/BadgesList';

class BadgesContainer extends Component {
  state = { badges: [] };

  componentDidMount() {
    this.setState({
      badges: data.badges
    });
  }

  render() {
    return (
      <div className="Badges">
        <Navbar />
        <div className="Badges__hero">
          <div className="Badges__container">
            <img src={confLogo} alt="Conf Logo" className="Badges_conf-logo" />
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              Add
            </Link>
          </div>

          <BadgesList badges={this.state.badges} />
        </div>
      </div>
    );
  }
}

export default BadgesContainer;
