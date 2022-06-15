import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import libros from '../../src/helpers/products'


function ItemDetailContainer() {
	const [productDetail, setProductDetail] = useState({});
	
  	const [loading, setLoading] = useState(true);
  	const [error, setError] = useState(false);
	  const {id} = useParams();
  
	

	useEffect(() => {
		setProductDetail({});
		setLoading(true);
		setError(false);
		const promesa = new Promise((res,) => {
		  setTimeout(() => {
			res(libros.find(item => item.id == id));
		   }, 2000); 
		});
	   
		promesa
		  .then((result) => {
			setProductDetail(result);
		  })
		  
		  .catch((error) => {
			setError(true);
			console.log(error);
		  })
		  .finally(() => {
			setLoading(false);
		  });
	  }, [id]);
	
	

	return (
        <>
			 {
            loading ?
            <div className="d-flex align-items-center justify-content-center">
                <span className="me-4">Loading shoes...</span>
            <div className="spinner-border text-dark bg-gradient" role="status"></div>
            </div>
            :
            <ItemDetail
             productDetail={productDetail} />
              
            
        }
        </>
    )
}

export default ItemDetailContainer