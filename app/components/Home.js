import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className='home-container'>
      <h1>Welcome to the Github Battle Website</h1>
      <Link className='button' to='/battle'>Battle</Link>
    </div>
  );
}

export default Home;