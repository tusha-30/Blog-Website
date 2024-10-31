// app/Banner.jsx
import Image from 'next/image';

export default function Banner() {
    return (
        <div className="relative w-full h-60 md:h-80">
            <Image
                src="/images/img1.jpeg"
                alt="Banner"
                layout="fill" 
                className="absolute inset-0 object-cover"
                priority
            />
            <div className="relative flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
                <h2 className="text-3xl font-bold text-white">Welcome to Our Blog!</h2>
                <p className="mt-2 text-lg text-white">Explore the latest insights and articles.</p>
            </div>
        </div>
    );
}
