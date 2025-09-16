import Link from 'next/link';
import type React from 'react';

export default function NavBarBtn({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      scroll={false}
      className={`hidden text-xs sm:block sm:text-sm md:text-base hover:text-skiey transition-all ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}
