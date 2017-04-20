import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
  render () {
    return(
      <div className='footer'>
        <div className='inner-footer'>
          <div id='footer-home'>
            <Link to='/'> <span>Home </span></Link>
          </div>
          <div id='linkedin'>
            <a target="_blank" href='https://www.linkedin.com/in/rithyhuot'><img src='/images/linkedin-logo.png' /> </a>
          </div>
          <div id='github'>
          <a target="_blank"
            href='https://github.com/rithyhuot'><img src='/images/github.png' /> </a>
          </div>
        </div>
        <div id='trade-mark'>
          <span> Website by Rithy Huot</span>
        </div>
      </div>
    );
  }
}

export default Footer;
