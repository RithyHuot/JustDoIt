import React from 'react';
import { Link } from 'react-router';

class Explore extends React.Component {
  render() {
    return (
      <div className='explore'>
        <div className='explore-text'>
          <span >Explore</span>
        </div>
        <div className='first-explore'>
          <div className='first-inner'>
            <div id='img1'>
              <img src='/images/movements.png'/>
            </div>
            <span> Movements </span>
          </div>
          <div className='second-inner'>
            <div id='img2'>
              <img src='/images/camp.png'/>
            </div>
            <span> Outdoors & Adventure </span>
          </div>
          <div className='third-inner'>
            <div id='img3'>
              <img src='/images/tech.png'/>
            </div>
            <span> Tech </span>
          </div>
          <div className='fourth-inner'>
            <div id='img4'>
              <img src='/images/family.png'/>
            </div>
            <span> Family </span>
          </div>
        </div>

        <div className='second-explore'>
          <div className='second-inner'>
            <div id='img5'>
              <img src='/images/health.png'/>
            </div>
            <span> Health & Wellness </span>
          </div>
          <div className='second-inner'>
            <div id='img6'>
              <img src='/images/sport.png'/>
            </div>
            <span> Sports & Fitness </span>
          </div>
          <div className='third-inner'>
            <div id='img7'>
              <img src='/images/learning.png'/>
            </div>
            <span> Learning </span>
          </div>
          <div className='fourth-inner'>
            <div id='img8'>
              <img src='/images/photography.png'/>
            </div>
            <span> Photography </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;
