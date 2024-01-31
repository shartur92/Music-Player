import React, {useState} from 'react';
import '../Styles/Categories.css'
import Categorie_Btn from './Categorie_Btn';


const Categories = () => {
    
    const [btn, setBtn] = useState([
        "Music",
        'Podcasts',
        'Jazz',
        'Electronic',
        'Rock Classic',
        'Hip Hop',
    ])
    return (
        <div className='buttons'>
            {btn.map(bt => <Categorie_Btn key={Math.random()} btn = {bt}/>)}
        </div>
    );
}

export default Categories;