import React from 'react';
import Table from "./Table";


const Paymentdetailsconfirm = () => {

  
  const data = [
    {
      first: 'John',
      last: 'Doe',
      email: 'john@doe.com'
    },
    {
      first: 'Dorothy',
      last: 'Boe',
      email: 'dorothy@boe.com'
    },
    {
      first: 'Baby',
      last: 'Moe',
      email: 'baby@moe.com'
    }
  ]
  return (
    <div className="flex flex-col items-center justify-center">
       
    <h2>Payment Request Summary</h2>

    
   <div className=' '> 
    
    <Table
  
  data={data}
  caption="A basic table."
/>


</div>
   
    
   
    
  
  


 </div>
  )
}

export default Paymentdetailsconfirm