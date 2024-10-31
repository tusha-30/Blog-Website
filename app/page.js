// app/blogs/page.jsx
import Link from 'next/link';
import BlogCard from './blogs/BlogCard';
import Pagination from './blogs/Pagination';
import Banner from './components/Banner';
import DynamicText from './components/DynamicText';
const BLOGS_API_URL = 'https://api.slingacademy.com/v1/sample-data/blog-posts';

async function fetchBlogs(page) {
  const res = await fetch(`${BLOGS_API_URL}?offset=${(page - 1) * 12}&limit=12`); // Changed limit to 6
  const data = await res.json();
  return data;
}

export default async function BlogsPage({ searchParams }) {
  const page = parseInt(searchParams.page || '1', 10);
  const data = await fetchBlogs(page);
  const blogs = data.blogs;
  const totalBlogs = data.total_blogs; // Get the total number of blogs for pagination

  const totalPages = Math.ceil(totalBlogs / 12); // Calculate total pages

  return (
    <>
    {/* <DynamicText/> */}
  <Banner/></>
  );
}
