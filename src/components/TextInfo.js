import React from 'react';
import './styles/TextInfo.css';

const TextInfo = props => (
  <div className="TextInfo__container">
    <p>{props.text}</p>
  </div>
);

export default TextInfo;
