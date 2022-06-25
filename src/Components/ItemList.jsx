import React from 'react';
import Item from './Item';


const ItemList = ({shoes}) => {
    return (
        
        <div className='d-flex flex-wrap classItemList'>
            {shoes.map(shoee => <Item key={shoee.id} shoee={shoee}/>)}
        </div>
        
  )
}


export default ItemList;
