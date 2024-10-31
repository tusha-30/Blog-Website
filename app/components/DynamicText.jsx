// app/components/DynamicText.jsx
"use client"
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const DynamicText = () => {
  const textRef = useRef(null); 

  useEffect(() => {
    const options = {
      strings: [
        'Welcome to My Blog!',
        'Explore the Latest Insights!',
        'Join Our Community!',
      ],
      backSpeed: 50, 
      backDelay: 1500, 
      loop: true, 
      showCursor:false, 
    };


    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-center" style={{ height: '100px', paddingTop:"20px" }}> 
      <h1 className="text-3xl font-bold" ref={textRef}></h1>
    </div>
  );
};

export default DynamicText;
