import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [shoes, setShoes] = useState([])
    const [loading, setLoading] = useState(false)

    const booksarray = [
        { 
            id: 1,
            nombre: "Nike Air More Uptempo '96",
            photo: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/64718c5f-4651-45fb-bf83-7c45c60fc536/calzado-air-more-uptempo-96-BmBm4x.png",
            stock: 3
            
        },
        { 
            id: 2,
            nombre: "Nike Air Max 270",
            photo: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/21d72272-b29c-4827-9394-78219911c9e1/air-max-270-womens-shoes-Pgb94t.png",
            stock: 4
            
        },
        { 
            id: 3,
            nombre: "Jordan 1 Retro High OG",
            photo: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/4b0741a8-5d81-4bdb-b37c-3f069bf7aab8/jordan-1-retro-high-og-little-kids-shoes-pl891D.png",
            stock: 5
            
        },
        { 
            id: 4,
            nombre: "Nike Air VaporMax Plus",
            photo: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/38b17f35-fdb1-49e2-8386-5954b6350fc8/calzado-de-running-air-vapormax-plus-nC0dzF.png",
            stock: 5
            
        }
    ]

    useEffect(() => {
        const shoesPromise = new Promise((res, rej) => {
            setLoading(true)
            setTimeout(() => {
                res(booksarray)
                /*
                  Descomentar esta linea para ver lo que ocurre en un error
                  rej('Error')
                */
              }, 5000);
            })
        shoesPromise
        .then(result =>{
            setShoes(result)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
      
    }, []);
console.log(shoes)
    return (
        <>
        {
            loading ?
            <div className="d-flex align-items-center justify-content-center">
            <div className="spinner-border text-light bg-gradient" role="status"></div>
            </div>
            :
            <ItemList
              shoes={shoes} 
            />
        }
        </>
    );
}

export default ItemListContainer;
