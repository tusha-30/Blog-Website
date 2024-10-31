// app/Banner.jsx
export default function Banner() {
    return (
        <div className="relative w-full h-60">
            <img
                src="images/img1.jpeg"
                alt="Banner"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
                <h2 className="text-3xl font-bold text-white">Welcome to Our Blog!</h2>
                <p className="mt-2 text-lg text-white">Explore the latest insights and articles.</p>
            </div>
        </div>
    );
}
