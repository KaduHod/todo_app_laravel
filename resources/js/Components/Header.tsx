import React from 'react';
import { Link } from "@inertiajs/react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white shadow-md">
      <nav className="flex items-center gap-6">
        <h1 className="text-xl font-semibold">Tasks</h1>
      </nav>

      <div>
        <Link href="/logout" method="post" as="button" className="text-sm hover:underline">
          Logout
        </Link>
      </div>
    </header>
  );
};

export default Header;

