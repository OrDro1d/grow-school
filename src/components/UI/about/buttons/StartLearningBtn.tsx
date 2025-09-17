import PATHS from '@constants/paths';
import Link from 'next/link';

export default function StartLearningBtn({ className }: { className?: string }) {
  return (
    <Link
      className={`text-white  bg-white/20 px-8 py-4 border-2 hover:border-skiey hover:bg-skiey hover:shadow-skiey/40 shadow-xl shadow-white/20 rounded-2xl text-nowrap transition-all ${className}`}
      href={PATHS.HOME.URL}
    >
      Начать учиться
    </Link>
  );
}
