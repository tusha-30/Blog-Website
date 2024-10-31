// app/blogs/page.jsx
import Link from 'next/link';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Blog Posts1</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        {blogs.map((blog) => (
          <Link legacyBehavior key={blog.id} href={`/blogs/${blog.id}`}>
            <BlogCard title={blog.title} description={blog.content_text} imageUrl={blog.photo_url} />
          </Link>
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} /> {/* Pass totalPages to Pagination */}
    </div>
  );
}