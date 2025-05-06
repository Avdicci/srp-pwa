'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
const pathname = usePathname();

return (
<nav className="bg-gradient-to-r from-indigo-500 to-blue-700 text-white px-6 py-6 shadow-md">
    <div className="max-w-4xl mx-auto flex items-center justify-center">
    <div className="flex items-center gap-6 text-md font-medium">
        <NavLink href="/" label="Home" active={pathname === '/'} />
        <NavLink href="/history" label="History" active={pathname === '/history'} />
    </div>
    </div>
</nav>
);
}

function NavLink({ href, label, active }) {
    return (
    <Link
    href={href}
    className={`transition-colors hover:text-violet-500 ${
    active ? 'text-blue-300 underline underline-offset-4' : ''
        }`}
    >
        {label}
    </Link>
    );
}
