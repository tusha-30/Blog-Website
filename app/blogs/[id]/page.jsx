// app/blogs/[id]/page.jsx
import { notFound } from 'next/navigation';

const BLOGS_API_URL = 'https://api.slingacademy.com/v1/sample-data/blog-posts';

async function fetchBlog(id) {
  const res = await fetch(`${BLOGS_API_URL}/${id}`);
  if (!res.ok) {
    return null; // If the response is not OK, return null
  }
  const data = await res.json();
  return data.blog; // Ensure the API response contains a 'blog' object
}

export default async function BlogDetailPage({ params }) {
  const blog = await fetchBlog(params.id); // params.id contains the dynamic ID from the URL

  if (!blog) {
    return notFound(); // If blog is null, return a 404
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <img src={blog.photo_url} alt={blog.title} className="w-full h-60 object-cover rounded mb-4" />
      <p className="text-lg">{blog.content_text}</p>
      <span className="text-gray-500">{new Date(blog.created_at).toLocaleDateString()}</span>
    </div>
  );
}
