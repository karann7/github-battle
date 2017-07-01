import React, { Component } from 'react';
import PropTypes from 'prop-types';

function WinnerLoser(props) {
  return (
    <div>
      <h1 className='header'>{props.label}</h1>
      <h3 style={{textAlign: 'center'}}>Score: {props.score}</h3>
    </div>
  );
} 

WinnerLoser.PropTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired
}

export default WinnerLoser;