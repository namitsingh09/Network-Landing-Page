import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "./card.css"
import axios from 'axios';

export default function Card() {

  const [todo, setTodo] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const [todoss, setTodoss] = useState([]);
  const [errorr, setErrorr] = useState(null);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/selection2");
      setTodoss(data);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/selection2")
      .then((response) => {
     
        setTodoss(response.data);
        console.log(response.data)
        
        
        
      })
 
      
      .catch((err) => {
       
        setErrorr(err);
      });
  }, [todo]);
  

  if (error) {
    return <p>Error: {error.message}</p>;
  }





  
   return (

    
  
<>

    {todoss.map((todo) => (

  <div className='sx'>
     
       
  <div key={todo.id} class="product-card">
  <img src={todo.url} alt="Product image" />
  <div class="product-info">
    <p>#FlashSale</p>
    <h3 class="product-name">{todo.name}</h3>
    <p class="product-description">Product description goes here</p>
    <p class="product-price">$99.99</p>
  </div>
  <button class="buy-button">Buy</button>
</div>
</div>
  
       
 
))}
</>







  )
}
