export default function StatsSection({
  stats,
  className,
}: {
  stats: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <section className={` border-gray-200 ${className}`}>
      <div className='mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14'>
        <h2 className='text-2xl font-semibold tracking-tight'>Цифры</h2>
        <div className='mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4'>
          {stats.map((s) => (
            <div
              key={s.label}
              className='rounded-xl border border-gray-200 bg-gray-50 p-6 text-center'
            >
              <p className='text-2xl font-semibold'>{s.value}</p>
              <p className='mt-1 text-sm text-gray-600'>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
