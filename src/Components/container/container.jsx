import React, {Component} from 'react';
import MenuItem from '../menuitem/menuitem';
import './container.scss';

class Container extends Component{
    constructor(){
        super();
        this.state={
            sections:[
                {
                    title:'Hats',
                    id:1,
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    linkUrl:'hats'
                },
                {
                    title:'Jackets',
                    id:2,
                    imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                    linkUrl:'jackets'
                },
                {
                    title:'Sneakers',
                    id:3,
                    imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                    linkUrl:'sneakers'
                },
                {
                    title:'Womens',
                    id:4,
                    imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
                    size:'large',
                    linkUrl:'womens'
                },
                {
                    title:'Mens',
                    id:5,
                    imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
                    size:'large',
                    linkUrl:'mens'
                }
            ]
        }
    }
    render(){
        return(
            <div className='Container'>
                {this.state.sections.map(({id,...otherSectionProps})=>(
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        )
    }
}
export default Container;