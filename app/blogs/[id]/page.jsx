import { notFound } from 'next/navigation';
import { FaCalendarAlt } from 'react-icons/fa';

const BLOGS_API_URL = 'https://api.slingacademy.com/v1/sample-data/blog-posts';

async function fetchBlog(id) {
  const res = await fetch(`${BLOGS_API_URL}/${id}`);
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data.blog;
}

export default async function BlogDetailPage({ params }) {
  const blog = await fetchBlog(params.id);

  if (!blog) {
    return notFound();
  }

  return (
    <div className="p-6 max-w-2xl mx-auto rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">{blog.title}</h1>
      <img
        src={blog.photo_url}
        alt={blog.title}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <p className="text-lg text-gray-700 leading-relaxed mb-4">{blog.content_text}</p>
      <span className="text-sm text-gray-500">
    <div className='flex gap-2'><FaCalendarAlt></FaCalendarAlt>   {new Date(blog.created_at).toLocaleDateString()}
      </div> 
      </span>
    </div>
  );
}
