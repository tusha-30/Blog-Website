// app/blogs/BlogCard.jsx
export default function BlogCard({ title, description, imageUrl }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition duration-300 hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded" />
    <div className="p-4">
      <h2 className="text-xl font-semibold ">{title}</h2>
      <p className="text-gray-600 ">{description.slice(0, 100)}...</p>
      </div>  </div>
  );
}
