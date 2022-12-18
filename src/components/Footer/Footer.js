import React from 'react';
import { FaGlobeAfrica } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='bg-bluish text-white'>
           <div className='flex justify-between mt-12'>
            <div className='flex justify-evenly space-x-12 mt-6 ml-24 '>
               <div>
                <p><a href="/h">Home</a></p>
                <p><a href="/s">Services</a></p>
                <p><a href="/a">About</a></p>
                <p><a href="/a">Contact</a></p>
               </div>
               <div>
                <p><a href="/a">Carrer</a></p>
                <p><a href="/b">Blog</a></p>
                <p><a href="/d">Help & Support</a></p>
                <p><a href="/z">Affilate</a></p>
               </div>
               <div>
                <p><a href="/t">Terms</a></p>
               <p><a href="/p">Privacy & Policy</a></p>
               
                </div> 
            </div>
            <div className='mt-6 mx-24 '>
                <p className='text-xl border-2 flex p-4' > <FaGlobeAfrica className='mt-1 mr-2'></FaGlobeAfrica>English</p>
            </div>
           </div>
           <div className='flex justify-around mt-32 items-end'>
           <div><p className='text-5xl  font-thin tracking-tighter'>N I R A J  A <span className='text-sm tracking-normal' >Online Edu Home</span></p></div>
           <div><p>Copyright <span>&copy;</span> 2022 N I R A J A <small>Online Edu Home</small></p></div>
           </div>
        </div>
    );
};

export default Footer;