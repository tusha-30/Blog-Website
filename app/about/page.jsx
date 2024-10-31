// app/about/page.jsx
"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import DynamicText from '../components/DynamicText';

export default function AboutPage() {

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>

    <div className="p-6 max-w-4xl mx-auto">
      <motion.h1 
        className="text-4xl font-bold text-center mb-6"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>

      <motion.div 
        className="relative w-full  h-60 md:h-80 lg:h-100  mb-6"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src="/images/team.jpeg" // Adjust the image path accordingly
          alt="Our Team"
          layout="fill"
          className="object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
        />
      </motion.div>

      <motion.p 
        className="text-lg text-gray-700"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Welcome to My Blog! We are dedicated to bringing you the latest insights and articles on various topics. Our team is passionate about writing and sharing knowledge to inspire and inform our readers.
      </motion.p>

      <motion.p 
        className="text-lg text-gray-700 mb-4 mt-6"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Thank you for visiting our blog, and we hope you find our content valuable and engaging!
      </motion.p>
      <DynamicText/>
    </div>
    </>
  );
}
