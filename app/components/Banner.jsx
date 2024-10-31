// app/Banner.jsx
import Image from 'next/image';

export default function Banner() {
    return (
        <div className="relative w-full h-60 md:h-80">
            <Image
                src="/images/img1.jpeg" // Use relative path for images in the 'public' directory
                alt="Banner"
                layout="fill" // This makes the image cover the parent div
                className="absolute inset-0 object-cover"
                priority // Optional: load the image eagerly for better performance
            />
            <div className="relative flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
                <h2 className="text-3xl font-bold text-white">Welcome to Our Blog!</h2>
                <p className="mt-2 text-lg text-white">Explore the latest insights and articles.</p>
            </div>
        </div>
    );
}
