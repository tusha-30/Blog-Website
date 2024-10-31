import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow p-4 z-10">
      <nav className="flex justify-between items-center">
        <Link legacyBehavior href="/">
          <a className="text-2xl font-bold">Home</a>
        </Link>
        <div className="flex space-x-4">
          <Link legacyBehavior href="/blogs">
            <a className="text-lg transition-transform duration-300 transform hover:scale-110">Blogs</a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className="text-lg transition-transform duration-300 transform hover:scale-110">About Us</a>
          </Link>
          <Link legacyBehavior href="/contact">
            <a className="text-lg transition-transform duration-300 transform hover:scale-110">Contact</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
