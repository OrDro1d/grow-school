import Link from 'next/link';

export default function ProfileBtn({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      scroll={false}
      href={href}
      className='px-8 py-1 text-xs transition-all border-2 shadow-lg md:text-base border-skiey rounded-4xl sm:text-xs hover:bg-skiey hover:text-white shadow-black/10 hover:shadow-skiey/20 font-regular'
    >
      {children}
    </Link>
  );
}
