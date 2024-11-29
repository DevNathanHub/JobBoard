'use client';

    import {
    UserCircleIcon,
    HomeIcon,
    DocumentMagnifyingGlassIcon,
    BriefcaseIcon,
    } from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Jobs', href: '/dashboard/jobs', icon: DocumentMagnifyingGlassIcon, },
  { name: 'My Jobs', href: '/dashboard/myjobs', icon: BriefcaseIcon },
  { name: 'Profile', href: '/dashboard/profile', icon: UserCircleIcon },

];



export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[60px] w-32 grow items-center justify-center gap-2  rounded-2xl bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 mt-2 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'text-grey-800 text-blue-400': pathname == link.href,
              },
            )}>
            <LinkIcon className="w-6" />
            
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}