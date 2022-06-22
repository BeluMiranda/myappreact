import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {
	const [itemDet, itemDetailId] = useState()
  	{/*const [loading, setLoading] = useState(true);
  	const [error, setError] = useState(false);/*/}
	const {id} = useParams();
  
	

	useEffect(() => {
		fetch('../../products.json'
            , 
        )
            .then((response) => response.json())
            .then((data) => {itemDetailId(data.filter(prod => prod.id == id))})
            .catch((e) => {
                console.log("salio mal")
            })
            .finally(() => {
                console.log("fin")
            })
    }, [id])
	
	

	return (
        <>
			 {/*
            loading ?
            <div className="d-flex align-items-center justify-content-center">
                <span className="me-4">Loading shoes...</span>
            <div className="spinner-border text-dark bg-gradient" role="status"></div>
            </div>
	:*/}
             {itemDet && <ItemDetail itemDet={itemDet} />}
        </>
    )
}

export default ItemDetailContainer