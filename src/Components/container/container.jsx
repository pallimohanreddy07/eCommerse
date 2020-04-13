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
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png'
                },
                {
                    title:'Jackets',
                    id:2,
                    imageUrl:'https://i.ibb.co/px2tCc3/jackets.png'
                },
                {
                    title:'Sneakers',
                    id:3,
                    imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png'
                },
                {
                    title:'Womens',
                    id:4,
                    imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
                    size:'large'
                },
                {
                    title:'Mens',
                    id:5,
                    imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
                    size:'large'
                }
            ]
        }
    }
    render(){
        return(
            <div className='Container'>
                {this.state.sections.map(({title,id,imageUrl,size})=>(
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))}
            </div>
        )
    }
}
export default Container;