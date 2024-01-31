import React from 'react';
import "../Styles/LeftMenuItems.css"
import home_icon from '../components/assets/icons/Home.svg'
import search_icon from '../components/assets/icons/Search.svg'
import notifications_icon from '../components/assets/icons/Notifications.svg'
import diamond_icon from '../components/assets/icons/PremiumContent.svg'
import Playlists_icon from '../components/assets/icons/Playlists.svg'





const LeftMenuItems = () => {

    const listItems = [
        {
            name: "Home",
            src: home_icon,
        },
        {
            name: "Search",
            src: search_icon,
        },
        {
            name: "Playlists",
            src: Playlists_icon,
        },
        {
            name: "Notifications",
            src: notifications_icon,
        },
        {
            name: "Premium Content",
            src: diamond_icon,
        },
    ]


    return (
        <div>
            <ul>
                {listItems.map(item => {
                    return (
                        <li key={Math.random()} className='item'>
                            <p>{item.name}</p>
                            <img src={item.src} />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default LeftMenuItems;