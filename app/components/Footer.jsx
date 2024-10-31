// app/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p className="transition-transform duration-300 transform hover:scale-110">&copy; {new Date().getFullYear()} Tusha Blog. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-gray-400 hover:text-white mx-2 transition-transform duration-300 transform hover:scale-110">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2 transition-transform duration-300 transform hover:scale-110">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2 transition-transform duration-300 transform hover:scale-110">Contact Us</a>
        </div>
      </footer>
    );
  }
  