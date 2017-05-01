import React from 'react';
import { Link } from 'react-router';

class Explore extends React.Component {
  render() {
    return (
      <div className='explore'>
        <div className='explore-text'>
          <span >Explore</span>
        </div>
        <ul className='first-explore'>
          <li>
            <Link to={`/category/Movements`}>
              <div id='img1'>
                <img src='/images/movements.png'/>
              </div>
              <span> Movements </span>
            </Link>
          </li>
          <li>
            <Link to={`/category/Outdoors & Adventure`}>
              <div id='img2'>
                <img src='/images/camp.png'/>
              </div>
              <span> Outdoors & Adventure </span>
            </Link>
          </li>
          <li>
            <Link to={`/category/Tech`}>
              <div id='img3'>
                <img src='/images/tech.png'/>
              </div>
              <span> Tech </span>
            </Link>
          </li>
          <li>
            <Link to={`/category/Family`}>
              <div id='img4'>
                <img src='/images/family.png'/>
              </div>
              <span> Family </span>
            </Link>
          </li>
          <li>
            <Link to={`/category/Health & Wellness`}>
              <div id='img5'>
                <img src='/images/health.png'/>
              </div>
              <span> Health & Wellness </span>
            </Link>
          </li>
          <li>
            <Link to={`/category/Sports & Fitness`}>
              <div id='img6'>
                <img src='/images/sport.png'/>
              </div>
              <span> Sports & Fitness </span>
            </Link>
          </li>
          <li>
            <Link to={`/category/Learning`}>
              <div id='img7'>
                <img src='/images/learning.png'/>
              </div>
              <span> Learning </span>
            </Link>
          </li>
          <li>
            <Link to={`/category/Photography`}>
              <div id='img8'>
                <img src='/images/photography.png'/>
              </div>
              <span> Photography </span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Explore;
