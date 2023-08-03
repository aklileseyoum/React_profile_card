import React from 'react'
import Avatar from './Avatar'
import Information from './Information'
import './Styles.css'

export default function Card() {
    return (
        <div className = 'card'>
            <Avatar size={100}/>
            <Information
                person = {{
                    name: 'Katsuko Saruhashi',
                    age: 87,
                    gender: 'Female'
                }}
                website = {<a href= "https://en.wikipedia.org/wiki/Katsuko_Saruhashi">Visit the 
                website for more information</a>}
            />
        </div>
    );
}