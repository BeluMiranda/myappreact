import React from 'react';

const ListItemContainer = ({greeting}) => {
    return (
        <>
        <ul className='container'>
            <li>{greeting}</li>
            <li>{greeting}</li>
            <li>{greeting}</li>
        </ul>
        </>
    )
}

export default ListItemContainer;
