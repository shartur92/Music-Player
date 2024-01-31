import React from 'react';
import Categories from './components/Categories';
import './Styles/Right.css'
import Music_card from './components/Music_card';
import Right_Sidebar from './components/Right_Sidebar';



const Right = () => {
    return (
        
        <div className='main'>
            
                <Categories />
                <div className='popular_albums'>
                    <h2 className='pa_title'>Popular Albums</h2>
                    <div className='cards'>
                        <Music_card musicTitle={'musicTitle'} artistName={'artistName'} />
                        <Music_card musicTitle={'musicTitle'} artistName={'artistName'} />
                        <Music_card musicTitle={'musicTitle'} artistName={'artistName'} />
                        <Music_card musicTitle={'musicTitle'} artistName={'artistName'} />
                        <Music_card musicTitle={'musicTitle'} artistName={'artistName'} />
                        <Music_card musicTitle={'musicTitle'} artistName={'artistName'} />

                    </div>
                    
                </div>
            
        </div>
    );
}

export default Right;