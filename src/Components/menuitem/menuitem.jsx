import React from 'react';
import './menuitem.scss';
import {withRouter} from 'react-router-dom';

const MenuItem=({title, imageUrl, size, history, linkUrl, match})=>(
    <div className={`${size} MenuItem`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <div className='bgImage' style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='Content'>
            <h1 className='Title'>{title.toUpperCase() }</h1>
            <span className='Subtitle'>Shop Now</span>
        </div>
    </div>
)
export default withRouter(MenuItem);