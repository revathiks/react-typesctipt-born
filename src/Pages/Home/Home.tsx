import React, { useEffect, useState } from 'react';
import { IProductResponse } from '../../types/productResponse';
import Product from '../../Components/Product';
import Search from '../../Components/SearchBar'

type Props = {
    products:IProductResponse[],
    loadProducts: () => Promise<void>,
    productsBySearch:(searchText:string) => void
}
const Home =({products,loadProducts,productsBySearch}:Props) =>{
    // const [filter, setFilter] =useState('');
    // const [filterProducts,setFilterProducts] =useState(products);
   
    // if(filter.length>3){
    //     const filteredItems= products.filter((item)=>item.title.toLowerCase().startsWith(filter.toLowerCase()));
    //    //setFilterProducts(filteredItems)
    //    products=filteredItems
    // }
    useEffect(() => {
        loadProducts();
      }, []);
   
    return (
        <div>
            <Search productsBySearch={productsBySearch}/>           
            {
                products && 
                products.map((item)=> {
                    return (
                        <Product key={item.id} product={item} />
                    )
                })
            }
        </div>
    )
}
export default Home;
