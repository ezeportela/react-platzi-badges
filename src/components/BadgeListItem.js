import React, { Component } from 'react';

import './styles/BadgeListItem.css';
import twitterLogo from '../images/twitter-logo.png';

import Gravatar from './Gravatar';

class BadgeListItem extends Component {
  render() {
    return (
      <li key={this.props.id}>
        <div className="Badge__list-item">
          <div className="Badge__list-item-avatar">
            <Gravatar
              className="img-fluid rounded-circle"
              email={this.props.email}
            />
          </div>
          <div className="Badge__list-item-data">
            <span className="font-weight-bold">
              {this.props.firstName} {this.props.lastName}
            </span>
            <span>
              <a
                href={`https://twitter.com/${this.props.twitter}`}
                target="__blank">
                <img
                  src={twitterLogo}
                  alt="Twitter logo"
                  className="Badge__list-item-logo"
                />
                @{this.props.twitter}
              </a>
            </span>
            <span>{this.props.jobTitle}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default BadgeListItem;
