// app/blogs/BlogCard.jsx
import Image from 'next/image';

export default function BlogCard({ title, description, imageUrl }) {
  return (
    <div className="border p-4 rounded shadow-sm transition-transform transform hover:scale-105 cursor-pointer">
      <Image 
        src={imageUrl} 
        alt={title} 
        width={500} // Set your desired width
        height={160} // Set your desired height
        className="w-full h-40 object-cover rounded" 
      />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2">{description.slice(0, 100)}...</p>
    </div>
  );
}
