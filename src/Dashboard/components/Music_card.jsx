import React, { useState } from 'react';
import '../Styles/Music_Card.css'
import liked from '../components/assets/icons/liked.svg'
import unLiked from '../components/assets/icons/unliked.svg'
import PlayBtn from './Play_Btn';

const Music_card = ({ musicTitle, artistName }) => {

    const [like, setLike] = useState(unLiked)

    const likeHandler = () => {
        if (like === unLiked) {
            setLike(liked)
        }
        else {
            setLike(unLiked)
        }
    }
    return (
        <div className='card_wrapper'>
            <div className="img"></div>
            <div className='card_titles'>
                <div >
                    <div className='music_title'>Ephemeral Dreams</div>
                    <div className='artist'>Sarah Melody`</div>

                </div>
                <img src={like} alt="" onClick={likeHandler} />
            </div>
            <div className='card_footer'>
                <div className='tracks_likes'>
                    <div className='tracks'>12 Tracks</div>
                    <div className='svg_wrapper'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                            <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                        </svg>
                    </div>
                    <div className='likes'>31K Likes</div>
                </div>
                <div className='play_btn'>
                    <PlayBtn />
                </div>
            </div>
        </div>
    );
}

export default Music_card;