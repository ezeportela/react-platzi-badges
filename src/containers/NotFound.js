import React, { Component } from 'react';

import astronaut from '../images/astronaut.webp';
class NotFound extends Component {
  render() {
    return (
      <div className="full__container">
        <img src={astronaut} alt="Image" className="img-fluid" />

        <h2 className="pt-5">Ups! No se ha encontrado la página solicitada</h2>
      </div>
    );
  }
}

export default NotFound;
