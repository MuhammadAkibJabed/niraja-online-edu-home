import React from 'react';

const PopularCourse = (props) => {
    const{name,img,instructor,price}=props.popularCourse;
    return (
        <div >
            
            <div className='border-2  bg-bluish text-white border-indigo-600 rounded-md p-12'>
                <img className='h-72 w-72' src={img} alt="" />
                 <h1 className='text-3xl font-semibold'>{name}</h1>
                <h1 className='text-2xl font-semibold'>Instructor: {instructor}</h1>
                <h1 className='text-xl font-semibold'>Enroll fee:${price}</h1>
                <button className='bg-white text-bluish font-bold p-3 rounded-lg mt-3'>Enroll Now</button>
                </div>
        </div>
            
            
            
       
            
    );
};

export default PopularCourse;