import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';

class BadgeNewContainer extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false, redirectUrl: '/badges' });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  render() {
    if (this.state.redirectUrl) return <Redirect to={this.state.redirectUrl} />;
    return (
      <Fragment>
        <div className="BadgeNew__hero">
          <img
            src={header}
            alt="Logo"
            className="img-fluid BadgeNew__hero-image"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge {...this.state.form} />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                {...this.state.form}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BadgeNewContainer;
