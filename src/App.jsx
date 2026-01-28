import React from 'react'
import Header from './component/Header'
import Card from './component/Card'
import Product from './component/Products'
import Banner from './component/Banner'
import ProductCard from './component/ProductCard'
export default function App() {
function handleClick() {
  alert('click');
}

  return (
    <div className=''>
      <button onClick={handleClick}>Click me</button>
       <Header/>
    <div className='flex gap-4 items-center justify-center'>
      <Card name="Rohan" age="22" />
      
      </div>
      
      <div>
        <ProductCard name=" " age=""/>
      </div>
      <div>
        <Product/>
<Banner/>
      </div>

    </div>
  )
}
