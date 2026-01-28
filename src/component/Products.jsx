import React from 'react'
import { Product } from '../assets/data'
export default function Products() {
  return (
    <div>
      {Product.map((el,idx)=>{
            return(
                <div key={idx}>
                    <p>{el.name}</p>
                    <p>{el.price}</p>
                </div>
            )
        })}
      
    </div>
  )
}
