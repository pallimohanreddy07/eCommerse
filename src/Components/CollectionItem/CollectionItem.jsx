import React from 'react';
import './CollectionItem.scss';

const CollectionItem=({imageUrl, name, price})=>(
    <div className='CollectionItem'>
        <div className='bgimage' style={{backgroundImage: `url(${imageUrl})`}} />
        <div className='CollectionFooter'>
            <span className='name'>{name}</span>
            <span className='price'>Rs.{price}</span>
        </div>
    </div>
)
export default CollectionItem;