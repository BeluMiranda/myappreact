import React, { useState, useEffect } from 'react';
import { getFirestore, getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

const ItemListContainer = () => {
    const {id} = useParams()
    const [shoes, setShoes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(() => {
        const db = getFirestore()
        const coleccionProductos = collection(db, "products");
        
    
        if (id) {
          const q = query(coleccionProductos, where("category", "==", id));
          getDocs(q)
          .then((snapshop) => {
            setShoes(
                snapshop.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
            )
          })
          .catch((error) => {
            setError(error)
          })
          .finally(()=>{
            setLoading(false)
          })
        } else {
          getDocs(coleccionProductos)
          .then((snapshop) => {
            setShoes(snapshop.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
          })
          .catch((error) => {
            setError(error)
          })
          .finally(()=>{
            setLoading(false)
          })
        }
        
      }, [id]);

      
    return (
        
      <>
        
      {
          loading ?
          <div className='loader'>
          <ClipLoader color={'black'} loading={loading} size={50} className='loader'/>
          </div>
          :
          <ItemList
            shoes={shoes} />
            
          
      }
      </>
    );
}

export default ItemListContainer;