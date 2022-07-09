import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

function ItemDetailContainer() {
	const [itemDet, setItemDetail] = useState({})
  	const [loading, setLoading] = useState(true);
  	const [error, setError] = useState(false);
	const {id} = useParams();
  
	

  useEffect(()=>{
    const db = getFirestore(); // obtenemos la base de datos

    const productRef = doc(db, "products", id); // obtenemos el documento

    getDoc(productRef)
        .then((snapshot) =>{
          setItemDetail({...snapshot.data(), id: snapshot.id}); // seteamos el estado
    }).finally(()=>{
      setLoading(false)
    })

}, [id]); // solo se ejecuta cuando el id cambie
	

	return (
        <>
			 {
            loading ?
            <div className='loader'>
          <ClipLoader color={'black'} loading={loading} size={50} className='loader'/>
          </div>
            
	            :
                itemDet && <ItemDetail itemDet={itemDet} />}
        </>
    )
}

export default ItemDetailContainer