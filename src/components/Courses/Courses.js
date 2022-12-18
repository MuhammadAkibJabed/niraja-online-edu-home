import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = (props) => {
    const[allCourses,setAllCourses]=useState([]);
    useEffect(()=>{
        fetch('./allCourses.json')
        .then(res=>res.json())
        .then(data=>setAllCourses(data))
    },[])
    return (
        <div>
            <h1 className='text-6xl my-12'>Services that we  provided</h1> 
          <div className='grid grid-cols-2 gap-4 justify-items-center'>
            {
                allCourses.map(course=><Course
                key={course.id}
                course={course}
                ></Course>)
            }
        </div> 
        </div>
    );
};

export default Courses;