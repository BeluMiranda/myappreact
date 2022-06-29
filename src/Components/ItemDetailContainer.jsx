import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {
	const [itemDet, setItemDetail] = useState({})
  	{/*const [loading, setLoading] = useState(true);
  	const [error, setError] = useState(false);/*/}
	const {id} = useParams();
  
	

  useEffect(()=>{
    const db = getFirestore(); // obtenemos la base de datos

    const productRef = doc(db, "products", id); // obtenemos el documento

    getDoc(productRef)
        .then((snapshot) =>{
          setItemDetail({...snapshot.data(), id: snapshot.id}); // seteamos el estado
    })

}, [id]); // solo se ejecuta cuando el id cambie
	

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