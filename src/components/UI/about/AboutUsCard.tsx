import type { ReactNode } from 'react';

export default function AboutUsCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-center transition-all hover:hover:border-skiey hover:text-skiey hover:bg-white/60 bg-white/10 md:max-w-64 border-2 border-white/60 rounded-2xl p-8 w-full text-sm sm:text-base ${className}`}
    >
      <p>{children} </p>
    </div>
  );
}
