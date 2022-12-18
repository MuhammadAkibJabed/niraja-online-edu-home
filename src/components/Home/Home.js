import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import PopularCourse from '../PopularCourse/PopularCourse';

const Home = () => {
    const[popularCourses,setPopularCourses]=useState([]);
    useEffect(()=>{
        fetch('./popularCourse.json')
        .then(res=>res.json())
        .then(data=>setPopularCourses(data))
    }
        ,[])
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-6xl mt-12'>Best Seller Courses</h1>
            <div className='grid grid-cols-2 gap-4 justify-items-center mt-12'>
                {
                    popularCourses.map(popularCourse=><PopularCourse
                    key={popularCourse.id}
                    popularCourse={popularCourse}
                    ></PopularCourse>)
                }
            </div>

        </div>
    );
};

export default Home;