// app/components/DynamicText.jsx
"use client"
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const DynamicText = () => {
  const textRef = useRef(null); // Create a ref for the element

  useEffect(() => {
    const options = {
      strings: [
        'Welcome to My Blog!',
        'Explore the Latest Insights!',
        'Join Our Community!',
      ],
      typeSpeed: 100, // Slower speed of typing (milliseconds)
      backSpeed: 50, // Speed of deleting (milliseconds)
      backDelay: 1500, // Delay before starting to delete (milliseconds)
      loop: true, // Loop the animation
      showCursor:false, // Show blinking cursor
    };

    // Initialize Typed.js
    const typed = new Typed(textRef.current, options);

    // Cleanup Typed.js instance on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-center" style={{ height: '100px', paddingTop:"20px" }}> {/* Set a fixed height */}
      <h1 className="text-3xl font-bold" ref={textRef}></h1>
    </div>
  );
};

export default DynamicText;
