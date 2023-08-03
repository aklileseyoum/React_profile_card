import React from 'react'
import './Styles.css'

function ToDisplay({website}) {
    if (website !== '') {
        return <p><b>Website: </b>{website}</p>
    }
}

export default function Information({person, website = ''}) {
    return ( 
        <div className='info'>
            <p><b>Name: </b>{person.name}</p>
            <p><b>Age: </b>{person.age}</p>
            <p><b>Gender: </b>{person.gender}</p>
            <p><b>Bio: </b>Katsuko Saruhashi (1920-2007) was a pioneering Japanese 
            geochemist and advocate for gender equality in science, known for her 
            significant contributions to understanding radioactive fallout and oceanic 
            chemistry.</p>
            <ToDisplay website={website}/>
        </div>
        
    );
}