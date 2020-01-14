import React, { Component } from 'react';

import BadgeListItem from './BadgeListItem';

class BadgesList extends Component {
  render() {
    return (
      <div className="Badges__list">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => (
            <BadgeListItem {...badge} key={badge.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
