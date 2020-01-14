import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import api from '../api';
import Spinner from '../components/Spinner';
import TextInfo from '../components/TextInfo';

class BadgesContainer extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: null,
      data: [],
      badges: []
    };
  }

  componentDidMount() {
    this.fetchBadges();
  }

  async fetchBadges() {
    this.setState({
      loading: true,
      error: null
    });

    try {
      const data = await api.badges.list();
      this.setState({
        loading: false,
        data
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message
      });
    }
  }

  render() {
    return (
      <div className="Badges">
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

          {this.state.loading && <Spinner {...this.state} />}

          {!this.state.loading &&
            this.state.data.length === 0 &&
            !this.state.error && <TextInfo text="No badges were found" />}

          {!this.state.loading && this.state.error && (
            <TextInfo text={this.state.error} />
          )}

          <BadgesList badges={this.state.data} />
        </div>
      </div>
    );
  }
}

export default BadgesContainer;
