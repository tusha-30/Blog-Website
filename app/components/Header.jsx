// app/components/Header.jsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow p-4 z-10">
      <nav className="flex justify-between items-center">
        <Link legacyBehavior href="/">
          <a className="text-2xl font-bold">My Blog</a>
        </Link>
        <Link legacyBehavior href="/blogs">
          <a className="text-lg">Blogs</a>
        </Link>
   
      </nav>
    </header>
  );
}
