'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const linkData = [
  {
    label: 'Performance',
    href: '/performance',
  },
  {
    label: 'Reliability',
    href: '/reliability',
  },
  {
    label: 'Scale',
    href: '/scale',
  },
];

// const accessLink = [
//   '/',
//   ...linkData.map((link) => {
//     return link.href;
//   }),
// ];
export default function Header() {
  const pathname = usePathname();
  //   if (!accessLink.includes(pathname)) return null;
  return (
    <div className="absolute z-10 w-full">
      <div className="container mx-auto flex items-center justify-between p-8 text-white">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="space-x-4 text-xl">
          {linkData.map((link) => (
            <Link
              key={link.href}
              className={pathname === link.href ? 'text-purple-500' : ''}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
