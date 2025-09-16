import Link from 'next/link';

export default function WelcomeScreenBtn({
  children,
  href = '#',
}: {
  children: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className='inline-block px-3 py-2 text-xs text-white transition-all border-2 rounded-tr-lg rounded-bl-lg border-white/40 rounded-tl-3xl rounded-br-3xl bg-white/40 hover:border-2 hover:border-white md:text-base sm:text-sm active:scale-90 lg:py-3 lg:px-6 lg:font-regular text-nowrap'
    >
      {children}
    </Link>
  );
}
