import React from 'react';
import './menuitem.scss';

const MenuItem=({title, imageUrl, size})=>(
    <div className={`${size} MenuItem`}>
        <div className='bgImage' style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='Content'>
            <h1 className='Title'>{title.toUpperCase() }</h1>
            <span className='Subtitle'>Shop Now</span>
        </div>
    </div>
)
export default MenuItem;