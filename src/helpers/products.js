const libros = [
    { 
        id: 1,
        nombre: "Nike Air Max 90",
        photo1: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        photo2: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        photo3: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        photo4: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        stock: 3,
        price:25000,
        category: "men", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    { 
        id: 2,
        nombre: "Nike Air Max 270",
        photo1: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/21d72272-b29c-4827-9394-78219911c9e1/air-max-270-womens-shoes-Pgb94t.png",
        stock: 4,
        price: 20000,
        category: "women",
        photo2: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc3a56f0-764b-43d3-a0d5-3c33bc2fef3b/calzado-air-max-270-7VpJSG.png",
        photo3: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ouweg5dax808k3vqipcr/calzado-air-max-270-Pgb94t.png",
        photo4: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/445f83ed-9c01-4af8-bd2c-9127001afc47/calzado-air-max-270-Pgb94t.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        
        
    },
    { 
        id: 3,
        nombre: "Jordan 1 Retro High",
        photo1: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/4b0741a8-5d81-4bdb-b37c-3f069bf7aab8/jordan-1-retro-high-og-little-kids-shoes-pl891D.png",
        stock: 5,
        price: 30000,
        category: "women",
        photo2: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        photo3: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        photo4: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        
        
    },
    { 
        id: 4,
        nombre: "Nike Air VaporMax",
        photo1: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/38b17f35-fdb1-49e2-8386-5954b6350fc8/calzado-de-running-air-vapormax-plus-nC0dzF.png",
        stock: 5,
        price: 27000,
        category: "men",
        photo2: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        photo3: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        photo4: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
       
        
    },
    { 
        id: 5,
        nombre: "Nike Dunk High",
        photo1: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/0e7bbfd6-8cf8-4a6f-ade0-14d001f9fc33/dunk-high-little-kids-shoes-cFXGXR.png",
        stock: 5,
        price: 27000,
        category: "kids",
        photo2: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        photo3: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        photo4: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
       
    },
    { 
        id: 6,
        nombre: "Lebron 19",
        photo1: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/9030d11b-42b1-4af3-9dea-98d693e8f610/lebron-19-big-kids-basketball-shoes-BBJZwr.png",
        stock: 5,
        price: 37000,
        category: "kids",
        photo2: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        photo3: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        photo4: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        
        
    },
    { 
        id: 7,
        nombre: "Jordan 1 Mid",
        photo1: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/1761b2f1-85e0-4d68-a34e-015e847a7a93/jordan-1-mid-big-kids-shoes-n86Lcp.png",
        stock: 5,
        price: 27000,
        category: "kids",
        photo2: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        photo3: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        photo4: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        
        
    },
    { 
        id: 8,
        nombre: "Jordan 1 Mid",
        photo1: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/666135c8-e5a0-4557-962f-c553fd087270/waffle-debut-mens-shoes-hCcRzs.png",
        stock: 5,
        price: 29000,
        category: "men",
        photo2: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        photo3: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        photo4: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/calzado-air-max-90-6n3vKB.png",
        
        
    }
]
export default libros