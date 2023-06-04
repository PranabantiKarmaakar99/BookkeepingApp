import React from 'react';
import Link from 'next/link';


const LoginForm = ({title,content}) => {

    const Formtypes = ["Payment-Login","DP-Login","Admin-login"]
  return (
    <div class="bg-stone-100 flex min-h-full flex-col justify-center px-6 py-6 lg:px-8 shadow-sm rounded-md">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
     
      <h2 class="mt-10 text-center font-semibold leading-9 text-lg tracking-tight text-stone-700">{title}</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" 
      action="/components/Accountadd" target="_blank" method="POST">
        <div>
          <label for="Loginid" class="block text-sm font-medium leading-6 text-stone-700">Login Id</label>
          <div class="mt-2">
            <input id="LoginId" name="LoginId" type="phone-number"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> 
          </div>
        </div>
  
        <div>
          <div class="flex flex-col  items-start justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-stone-700">Password</label>
            <input id="password" name="password" type="password"   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <div class="text-xs mt-2">
              <a href="#" class=" text-purple-600 hover:text-purple-500">Forgot password?</a>
            </div>
          </div>
         
        </div>
  
        <div>
        <Link href="/components/Accountadd" target="_blank">
          <button type="submit" class="flex  w-full justify-center rounded-md bg-green-200 px-3 py-1.5 text-sm font-semibold leading-6 text-stone-500 shadow-sm hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Sign in</button>
          </Link>
        </div>
      </form>
  
      <p class="mt-10 text-center flex flex-col items-start text-xs text-stone-500">
        Not a member?
        <a href="#" class=" leading-6 text-purple-600 hover:text-purple-500">Register</a>
      </p>
    </div>
  </div>

  
  )
}

export default LoginForm
