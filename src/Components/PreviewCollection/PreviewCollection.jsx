import React from 'react';
import './PreviewCollection.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const PreviewCollection=({title, items})=>(
    <div className='PreviewCollection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='Preview'>
            {items.filter((item,index)=>index<4).map(({id},{...otherItemProps})=>(
                <CollectionItem key={id} {...otherItemProps}/>
            ))}
        </div>
    </div>
)
export default PreviewCollection;