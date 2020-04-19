import React, {Component} from 'react';
import './Shoppage.scss';
import ShopData from './Shopdata';
import PreviewCollection from '../../Components/PreviewCollection/PreviewCollection';

class Shoppage extends Component{
    constructor(){
        super();
        this.state={
            collections: ShopData
        }
    }
    render(){
        const {collections}=this.state;
        return(
            <div className='Shoppage'>
                {collections.map(({id, ...otherCollectionProps})=>(
                    <PreviewCollection key={id} {...otherCollectionProps}/>
                ))}
            </div>
        )
    }
}
export default Shoppage;