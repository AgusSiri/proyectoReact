import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const camisa = 
   {
      id: '1',
      name: 'Camisa de Jean',
      description: 'Camisa de Jean.',
      price: 1000
}


const ItemDetailContainer = (product) => {
   const [prod, setProduct] = useState();

   useEffect(() => {
      getProduct();
    }, []);

   const getProduct = () => {
      const promiseProduct = new Promise(resolve => {
         setTimeout(() => {
            resolve(product);
         }, 3000)        
      });
      promiseProduct.then((result) => {
         setProduct(result);
      });
   }
   const ReturnProduct = () => {
      if(!prod){
         return <p>Cargando...</p>;
      }
      return <ItemDetail product={camisa} />;
   }

   return (
      <div className="container">
            <div>
               <ReturnProduct />  
            </div>
      </div>
   );
 }
export default ItemDetailContainer;