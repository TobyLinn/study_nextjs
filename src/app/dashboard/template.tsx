'use client';
import { useState } from 'react';

export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  return (
    <div className="mx-auto mt-10 border-2 border-dashed border-black p-4">
      <h2>Dashboard Template {count}</h2>
      <button
        className="my-4 rounded-md bg-black p-2 text-white"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {children}
    </div>
  );
}
