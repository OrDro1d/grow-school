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
      className={`shadow-xl shadow10-black/10 bg-white/10 md:max-w-40 border-2 border-white/60 rounded-2xl p-8 w-full text-sm sm:text-base ${className}`}
    >
      <p>{children} </p>
    </div>
  );
}
