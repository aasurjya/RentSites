"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-700 rounded-full w-10 h-5 flex items-center transition duration-300"
    >
      <div
        className={`w-5 h-5 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition duration-300 ${
          resolvedTheme === 'dark' ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
    </button>
  );
} 