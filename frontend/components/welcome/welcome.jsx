import React from 'react';
import { Link } from 'react-router';

class WelcomeVideo extends React.Component {
  render () {
    return(
      <div className='welcome-video'>
        <div id='video'>
          <video  width='100%'
            src="https://secure.meetupstatic.com/s/img/457419671895069178/guest_home/video.mp4"
            autoPlay loop data-vscid="awucb44bj">
          </video>
        </div>
        <div className='inner-video'>
          <div className='inner-text'>
            <span> What do you love? </span>
          </div>
          <div className='inner-smaller-text'>
            <span> JustDoIt right now! </span>
          </div>
          <div className='inner-signup'>
            <Link to='/signup' className='inner-signup-link'>Sign up</Link>
          </div>
        </div>
      </div>
  );}
}

export default WelcomeVideo;
