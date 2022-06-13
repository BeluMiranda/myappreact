import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
	const [productDetail, setProductDetail] = useState({});
	

	useEffect(() => {	
		const getDetail = () => {
                fetch("./products.json")
				.then((res) => res.json())
				.then(data => setProductDetail(data.find(prod => prod.id === 1)))
				.catch((err) => console.log(err))
        }
        setTimeout(() => {
            getDetail();
        }, 2000);
		
	}, []);

	return (
		<div>
			<ItemDetail productDetail={productDetail} />
		</div>
	);
}

export default ItemDetailContainer