import React from 'react';
import Form from "./LoginForm";
import Navbar from "./Navbar";



const Loginpage = () => {
 
  const Formtypes = ["Payment-Login","DP-Login","Admin-login"]

  return (

    <div className=' h-full w-full flex-col items-center justify-center mb-20 '>
     
   
   <div className='mt-14 md:mt-32'>
   <div className=  'flex flex-col md:flex-row items-center justify-center gap-20 md:gap-20'>
   <div className=' '> <Form title="Payment-Login" /> </div>
   <div className=' '> <Form title="DP-Login" /> </div>
   <div className=' '> <Form title="Admin-Login" /> </div>
  
   </div>
   
   
   
   </div>
   
    </div>
  )
}

export default Loginpage

