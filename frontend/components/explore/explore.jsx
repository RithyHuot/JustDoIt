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
            <Link to={`/category/Movements`}>
              <div id='img1'>
                <img src='/images/movements.png'/>
              </div>
              <span> Movements </span>
            </Link>
          </div>
          <div className='second-inner'>
            <Link to={`/category/Outdoors & Adventure`}>
              <div id='img2'>
              <img src='/images/camp.png'/>
              </div>
              <span> Outdoors & Adventure </span>
            </Link>
          </div>
          <div className='third-inner'>
            <Link to={`/category/Tech`}>
              <div id='img3'>
              <img src='/images/tech.png'/>
              </div>
              <span> Tech </span>
            </Link>
          </div>
          <div className='fourth-inner'>
            <Link to={`/category/Family`}>
              <div id='img4'>
              <img src='/images/family.png'/>
              </div>
              <span> Family </span>
            </Link>
          </div>
        </div>

        <div className='second-explore'>
          <div className='second-inner'>
            <Link to={`/category/Health & Wellness`}>
              <div id='img5'>
              <img src='/images/health.png'/>
              </div>
              <span> Health & Wellness </span>
            </Link>
          </div>
          <div className='second-inner'>
            <Link to={`/category/Sports & Fitness`}>
              <div id='img6'>
              <img src='/images/sport.png'/>
              </div>
              <span> Sports & Fitness </span>
            </Link>
          </div>
          <div className='third-inner'>
            <Link to={`/category/Learning`}>
              <div id='img7'>
              <img src='/images/learning.png'/>
              </div>
              <span> Learning </span>
            </Link>
          </div>
          <div className='fourth-inner'>
            <Link to={`/category/Photography`}>
              <div id='img8'>
              <img src='/images/photography.png'/>
              </div>
              <span> Photography </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;
