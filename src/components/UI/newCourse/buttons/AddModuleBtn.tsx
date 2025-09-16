'use client';

export default function AddModuleBtn({
  children,
  addModuleAction,
  className,
}: {
  children: React.ReactNode;
  addModuleAction: () => Promise<void>;
  className?: string;
}) {
  return (
    <button
      type='button'
      className={`block px-8 py-2 mx-auto text-sm transition-all bg-white border-2 border-gray-200 shadow-lg cursor-pointer rounded-4xl w-fit shadow-black/10 hover:bg-mint/40 hover:border-mint ${className}`}
      onClick={addModuleAction}
    >
      {children}
    </button>
  );
}
