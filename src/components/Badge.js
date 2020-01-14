import React, { Component } from 'react';
import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';

import './styles/Badge.css';

class Badge extends Component {
  render() {
    const { firstName, lastName, email, jobTitle, twitter } = this.props;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={email} />
          <h1>
            {firstName || 'First Name'} <br /> {lastName || 'Last Name'}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{jobTitle || 'Job'}</h3>
          <div>@{twitter || 'twitter'}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
