"use client";
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaEye } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const BLOGS_API_URL = 'https://api.slingacademy.com/v1/sample-data/blog-posts';

async function fetchTopBlogs() {
  const blogIds = [1, 7, 8, 4, 5];
  const blogPromises = blogIds.map(id =>
    fetch(`${BLOGS_API_URL}/${id}`).then(response => response.json())
  );

  const blogData = await Promise.all(blogPromises);
  return blogData.map(data => data.blog);
}

const TopVisitedBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedBlogs = await fetchTopBlogs();
      setBlogs(fetchedBlogs);
    };

    fetchBlogs();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="my-16 px-4">
      <div className="flex justify-between px-8">
        <h2 className="text-2xl font-bold text-center mb-8">Top Visited Blogs</h2>
        <Link href="/blogs">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 hover:scale-110 transition duration-300">
            View More
          </button>
        </Link>
      </div>
      <Slider {...settings}>
        {blogs.map((blog) => (
          <div key={blog.id} className="p-4">
            <Link href={`/blogs/${blog.id}`}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition duration-300 hover:scale-105">
                <img
                  src={blog.photo_url}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                  priority
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <p className="text-gray-600 truncate">{blog.description}</p>
                  <div className="flex items-center mt-4">
                    <FaEye className="text-gray-500 mr-1" />
                    <span className="text-gray-500">123 views</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopVisitedBlogs;
