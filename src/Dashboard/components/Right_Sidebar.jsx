import React from 'react';
import "../Styles/Right_Sidebar.css";



const focusHandler = (e) => {
    e.target.value = '';
}

const blurHandler = (e) => {
    e.target.value = 'Search for something'
}

const Right_Sidebar = () => {



    return (
        <div className='sidebar'>
            <div className='search'>
                <input type="text" value={'Search for something'} onFocus={focusHandler} onBlur={blurHandler}/>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.23526 0C3.68705 0 0 3.68705 0 8.23526C0 12.7835 3.68705 16.4705 8.23526 16.4705C10.0851 16.4705 11.7924 15.8606 13.1672 14.831L17.9916 19.6554C18.4511 20.1149 19.196 20.1149 19.6554 19.6554C20.1149 19.196 20.1149 18.4511 19.6554 17.9916L14.831 13.1672C15.8606 11.7924 16.4705 10.0851 16.4705 8.23526C16.4705 3.68705 12.7835 0 8.23526 0ZM2.35293 8.23526C2.35293 4.98654 4.98654 2.35293 8.23526 2.35293C11.484 2.35293 14.1176 4.98654 14.1176 8.23526C14.1176 11.484 11.484 14.1176 8.23526 14.1176C4.98654 14.1176 2.35293 11.484 2.35293 8.23526Z" fill="white" />
                </svg>
            </div>
        </div>
    );
}

export default Right_Sidebar;