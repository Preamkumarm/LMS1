import Avatar from "../assets/avatar.png";
import Home from "./Home";
function Navbar()
{
    return (<div>
        <div className="p-1">
            
        <header className="h-14 w-auto  z-50   p-1  md:px-16 lg:px-20 shadow-lg bg-[#265C4B] border rounded-md border-none"
      style={{ boxShadow: '0 2px 6px 0 grey' }} >




<div className="ml-64  hidden md:flex h-full items-center justify-between px-4 md:px-0 max-w-6xl mx-auto">
  

<div className='absolute flex gap-20 right-full ml-16 -left-3'>
<div className=' -mr-96 -mt-0 right-full content-center'>
      
       </div>
      
       <p className='ml-6 absolute text-zinc-200 text-2xl -mt-4 font-bold '>Intrify </p>
     
</div>


<div className="flex items-center ml-96 ">
<div className="flex items-center ml-10 gap-6">
    <div className="text-zinc-200 flex items-center  gap-6">
                        <h4 className="cursor-pointer hover:text-orange-500  font-semibold">
                          Home
                        </h4>
                        <h5 className="cursor-pointer hover:text-orange-500  font-semibold">
                         About Us
                        </h5>
                        <h5 className="cursor-pointer hover:text-orange-500  font-semibold">
                       Contact Us
                        </h5>
                        </div>
                    
        </div>
        <img src={Avatar} alt="" className="w-10 h-10 ml-12"/>
        </div>

        </div>
        </header>
     
        </div>
     
        <Home/>
       
        
    </div>)
}
export default Navbar