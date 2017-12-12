import React from 'react';
import { Link } from 'react-router-dom';
function introComponent(props) {
    return (
        <div>
        <div className='split-pane col-xs-12 col-sm-6 uiux-side' style={{height: '100vh'}}>
        <div>
          <img src='https://bit.ly/BCR-design' />
          <div className='text-content'>
            <div className="bold">Navigate to:</div>
            <div className='big'>Students</div>
          </div>
          <Link to='/students'>
          <button>
          Students
          </button>
          </Link>
        </div>
      </div>
      <div className='split-pane col-xs-12 col-sm-6 frontend-side' style={{height: '100vh'}}>
        <div>
          <img src='https://bit.ly/bcr-dev' />
          <div className='text-content'>
            <div className="bold">Navigate to:</div>
            <div className='big'>Campuses</div>
          </div>
          <Link to='/campuses'>
          <button>
          Campuses
          </button>
          </Link>
        </div>
      </div>
      <div className='split-pane-or'>
        <div>
         <h3 className="bold">Modern React   Campus Manager</h3>
          <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/74452/bcr-white.png' />
        </div>
      </div>
      </div>
    )
}
export default introComponent