import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const {id} = useParams()
    const [shoes, setShoes] = useState([])
    const [loading, setLoading] = useState(false)

    const booksarray = [
        { 
            id: 1,
            nombre: "Nike Air Max 90",
            photo: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
            stock: 3,
            price:25000,
            category: "men"
            
        },
        { 
            id: 2,
            nombre: "Nike Air Max 270",
            photo: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/21d72272-b29c-4827-9394-78219911c9e1/air-max-270-womens-shoes-Pgb94t.png",
            stock: 4,
            price: 20000,
            category: "women"
            
        },
        { 
            id: 3,
            nombre: "Jordan 1 Retro High",
            photo: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/4b0741a8-5d81-4bdb-b37c-3f069bf7aab8/jordan-1-retro-high-og-little-kids-shoes-pl891D.png",
            stock: 5,
            price: 30000,
            category: "women"
            
        },
        { 
            id: 4,
            nombre: "Nike Air VaporMax",
            photo: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/38b17f35-fdb1-49e2-8386-5954b6350fc8/calzado-de-running-air-vapormax-plus-nC0dzF.png",
            stock: 5,
            price: 27000,
            category: "men"
            
        },
        { 
            id: 5,
            nombre: "Nike Dunk High",
            photo: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/0e7bbfd6-8cf8-4a6f-ade0-14d001f9fc33/dunk-high-little-kids-shoes-cFXGXR.png",
            stock: 5,
            price: 27000,
            category: "kids"
            
        },
        { 
            id: 6,
            nombre: "Lebron 19",
            photo: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/9030d11b-42b1-4af3-9dea-98d693e8f610/lebron-19-big-kids-basketball-shoes-BBJZwr.png",
            stock: 5,
            price: 37000,
            category: "kids"
            
        },
        { 
            id: 7,
            nombre: "Jordan 1 Mid",
            photo: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/1761b2f1-85e0-4d68-a34e-015e847a7a93/jordan-1-mid-big-kids-shoes-n86Lcp.png",
            stock: 5,
            price: 27000,
            category: "kids"
            
        },
        { 
            id: 8,
            nombre: "Jordan 1 Mid",
            photo: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/666135c8-e5a0-4557-962f-c553fd087270/waffle-debut-mens-shoes-hCcRzs.png",
            stock: 5,
            price: 29000,
            category: "men"
            
        }
    ]

    useEffect(() => {
        const shoesPromise = new Promise((res, rej) => {
            setLoading(true)
            setTimeout(() => {
                (!id) ? res (booksarray) : res(booksarray.filter(itemm => itemm.category === id))
                /*
                  Descomentar esta linea para ver lo que ocurre en un error
                  rej('Error')
                */
              }, 2000);
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
      
    }, [id]);
console.log(shoes)
    return (
        <>
        
        {
            loading ?
            <div className="d-flex align-items-center justify-content-center">
                <span className="me-4">Loading shoes...</span>
            <div className="spinner-border text-dark bg-gradient" role="status"></div>
            </div>
            :
            <ItemList
              shoes={shoes} />
              
            
        }
        </>
    );
}

export default ItemListContainer;