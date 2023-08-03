import React from 'react'
import './Styles.css'

export default function Avatar({size}) {
    return (
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" 
        width = {size} className='avatar'/>
    );
}