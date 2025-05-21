'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import React, { useEffect } from 'react';
// import { Avatar } from '@/ui';
// import ThemeController from './theme-controller';
// import { useProfileStore } from '@/store';

export default function Sidebar() {
  // const { profile, getProfile } = useProfileStore();
  const pathname = usePathname();

  const pages = [
    { href: '/', label: 'Профиль' },
    { href: '/users', label: 'Пользователи' },
    { href: '/companies', label: 'Компании' },
    { href: '/comments', label: 'Отзывы' },
  ];

  // useEffect(() => {
  //   getProfile();
  // }, [getProfile]);

  return (
    <div className="flex flex-col">
      <ul className="menu bg-base-200 text-base-content text-xl p-4 h-screen w-96">
        <h1 className="text-3xl">CompanyScore</h1>
        {pages.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`pb-1 min-w-16 mt-10 ${
              pathname === href ? 'border-b-2 border-white' : 'hover:border-b'
            }`}
          >
            <li>{label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
