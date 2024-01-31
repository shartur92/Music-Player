import React from 'react';
import './Styles/Left.css'
import LeftMenuItems from './components/LeftMenuItems';

const Left = () => {
  return (
    <div className='left_frame'>
      <div className='left_menu'>
        <div className='logo_name'>
          <div className='logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
              <path d="M35.5012 19C35.5012 22.4855 34.3732 25.8756 32.2886 28.6549C30.204 31.4343 27.277 33.4508 23.9524 34.3979C20.6279 35.3451 17.0878 35.171 13.8703 33.9021C10.6528 32.6333 7.93393 30.3391 6.12712 27.3684C4.32032 24.3977 3.52438 20.913 3.86032 17.444C4.19626 13.9751 5.64571 10.7117 7.98829 8.1501C10.3309 5.58846 13.4384 3.86868 16.8385 3.25223C20.2386 2.63579 23.7452 3.1564 26.8251 4.73492" stroke="#D7EDFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className='app_name'>
            Circle
          </div>
        </div>
        
      </div>
      <LeftMenuItems />
    </div>
  );
};

export default Left;
