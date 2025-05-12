"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const linkData = [
  {
    label: "About",
    href: "/dashboard/about",
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
  },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
      <div className="flex gap-4 font-bold text-lg mb-4">
        {linkData.map((link) => (
          <Link
            key={link.href}
            className={`link ${
              pathname === link.href ? " text-purple-500" : ""
            }`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <h2>Dashboard Layout {count}</h2>
      <button
        className="bg-black text-white p-2 my-4 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {children}
    </div>
  );
}
