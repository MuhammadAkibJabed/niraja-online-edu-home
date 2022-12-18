import React from 'react';
import bannerImg from'../../images/banner-img.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around bg-bluish  w-full h-full mt-12'>
            <div className='mt-12'>
                <h1 className='text-7xl text-white font-semibold '>Furnish your career</h1>
            <h1 className='text-white text-4xl font-semibold my-12 ml-12'>With Actual Skills</h1>
                <h1 className='text-white text-6xl font-thin' >With NIRAJA EDU HOME</h1>
            </div>
            <div>
                <img className='h-96 w-96 m-12 rounded-lg  ' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;