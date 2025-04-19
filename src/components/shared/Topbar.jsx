import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";

const Topbar = () => {
  return (
    <header className='py-3.5 bg-[#7E33E0]'>
        <div className='container mx-auto'>
            <div>
                <div className='flex items-center gap-12'>
                  <div className="flex items-center gap-2">
                    <CiMail />
                    <a href="mailto:mhhasanul@gmail.com" className='text-white'>mhhasanul@gmail.com</a>
                  </div> 
                
                <div className='flex items-center gap-2'>                  
                  <FaPhoneVolume />
                  <a href="callto:(12345)67890">(12345)67890</a>                  
                </div>
            </div>
            <div className=''></div>
        </div>
        </div>
    </header>
  )
}

export default Topbar
