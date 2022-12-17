import React from 'react';
import { Link } from 'react-router-dom';
import CompanyHeading from '../CompanyHeading/CompanyHeading';

const Header = () => {
    return (
        <div>
            <CompanyHeading></CompanyHeading>
            <div className='flex items-center justify-evenly bg-bluish text-white p-5'>
                <div >
                    <p className='text-5xl  font-thin tracking-tighter'>N I R A J  A <span className='text-sm tracking-normal' >Online Edu Home</span></p>
                    
                </div>
                <div><input className='py-1 px-8' type="text" placeholder='Search your desire course' /></div>
                <div className='text-2xl '> 
                    <Link className='ml-3' to='/home'>Home</Link>
                    <Link className='ml-3'  to='/courses'>Services</Link>
                    <Link className='ml-3' to='/about'>About</Link>
                    <Link className='ml-3' to='/contact'>Contact</Link>
                </div>
                
                <div><button>LOG IN</button></div>
            </div>
        </div>
    );
};

export default Header;