import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex items-center justify-center h-14 w-full text-lg text-stone-600 bg-green-200 gap-20 md:gap-[550px] lg:gap-[1000px] lg:text-2xl'>
   <Link href="/components/LoginPage" target="_blank">
   <div className='pl-2 font-semibold'> 
    The ABODE </div>
   
   
   
   </Link> 
    <div className=''> Book-Keeping  </div>
   
     
    </div>
  )
}

export default Navbar
