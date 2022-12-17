import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
           <div className='flex justify-between mt-12'>
            <div className='flex justify-evenly space-x-12 mt-6 '>
               <div>
                <p><a href="">Home</a></p>
                <p><a href="">Services</a></p>
                <p><a href="">About</a></p>
                <p><a href="">Contact</a></p>
               </div>
               <div>
                <p><a href="">Carrer</a></p>
                <p><a href="">Blog</a></p>
                <p><a href="">Help & Support</a></p>
                <p><a href="">Affilate</a></p>
               </div>
               <div>
                <p><a href="">Terms</a></p>
               <p><a href=""></a>Privacy & Policy</p>
               
                </div> 
            </div>
            <div className='mt-6 ml-6'>
                <p className='text-xl border-2 p-2' >English</p>
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