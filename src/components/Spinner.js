import React from 'react';
import './styles/Spinner.css';

const Spinner = props => (
  <div className="Spinner__container">
    <div className="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Spinner;
