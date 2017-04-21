import React from 'react';
import { Link } from 'react-router';

export default function SignupHeader () {
  return(
    <div className='signup-header'>
      <div className='signup-logo'>
        <Link to='/'><img src='/images/justdoit.png' /> </Link>
      </div>
    </div>
  );
}
