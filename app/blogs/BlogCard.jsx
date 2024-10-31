// app/blogs/BlogCard.jsx
export default function BlogCard({ title, description, imageUrl }) {
  return (
    <div className="border p-4 rounded shadow-sm transition-transform transform hover:scale-105 cursor-pointer">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2">{description.slice(0, 100)}...</p>
    </div>
  );
}
