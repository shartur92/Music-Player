import React from 'react';
import '../Styles/Categories_Btn.css'

const Categorie_Btn = ({btn,}) => {
    return (
        <div>
            <button className='cat_btn'>
                {btn}
            </button>
        </div>
    );
}

export default Categorie_Btn;