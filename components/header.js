import Link from 'next/link';
import React from 'react';
export default function Header() {
  return (
    <header className=" py-8 px-4 bg-gray-800 flex justify-between items-baseline">
      <Link href="/">
        <a>
          <h1 className=" font-medium text-4xl text-white">Fuel stations</h1>
        </a>
      </Link>
      <Link href="/stations">
        <a>
          <h2 className="text-white text-xl font-medium">+ Create new Station</h2>
        </a>
      </Link>
    </header>
  );
}
