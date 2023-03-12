import React from 'react'
import ProductCard from  '../components/ProductCard';
//import '../../App.css'
const Card = () => {
    console.log(ProductCard);

    // const listItem = product_card.map((item)=>{
        
    // })
  return (

    <div className='container'>
    <h3 className='mt-3 m-5 d-flex align-items-center'>Add to card</h3>
    <div className='row gy-3'>
  

    {
     ProductCard.map((item)=>

     <div className='col-md-6  gy-3'>
        <div className='card align-items-lg-center' style={{width: 400}} key={item.id}>
            <img src={item.thumb} style={{width:90,height:90}}/>
        
        <div className='card-body'>
        <h2 class="card-title">{item.product_name}</h2>
            <p>{item.description}</p>
            <p class="card-text">{item.price} <span>{item.currency}</span></p>
            <div className='btn btn-primary'>Add to card</div>
        </div>
        </div>
        </div>
        
      )
        }
        </div>
    </div>
   
  )
}

export default Card