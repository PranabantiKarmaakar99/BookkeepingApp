import Image from 'next/image';
import Login from "./components/Loginpage";
import Navbar from './components/Navbar';



export default function Home() {
  return (
   
     <div> 
     <Navbar />
     
     <Login />
     
     </div>
  )
}
